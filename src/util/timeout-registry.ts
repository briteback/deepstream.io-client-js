import {
  Message,
  RECORD_ACTIONS as RECORD_ACTION,
  RPC_ACTIONS as RPC_ACTION,
} from "../../binary-protocol/src/message-constants";
import { RESPONSE_TO_REQUEST } from "../../binary-protocol/src/utils";
import { IServices } from "../client";
import { IOptions } from "../client-options";
import { EVENT } from "../constants";

import * as EventEmitter from "component-emitter2";

export interface ITimeout {
  event?: EVENT | RPC_ACTION | RECORD_ACTION;
  message: Message;
  callback?: (event: EVENT | RPC_ACTION | RECORD_ACTION, message: Message) => void;
  duration?: number;
}

interface IInternalTimeout {
  timerId: number;
  uniqueName: string;
  timeout: ITimeout;
}

/**
 * Subscriptions to events are in a pending state until deepstream acknowledges
 * them. This is a pattern that's used by numerour classes. This registry aims
 * to centralise the functionality necessary to keep track of subscriptions and
 * their respective timeouts.
 */
export class TimeoutRegistry extends EventEmitter {
  private options: IOptions;
  private services: IServices;
  private register: Map<number, IInternalTimeout>;
  private ackRegister: Map<string, IInternalTimeout>;

  constructor(services: IServices, options: IOptions) {
    super();
    this.options = options;
    this.services = services;
    this.register = new Map();
    this.ackRegister = new Map();
  }

  /**
   * Add an entry
   */
  public add(timeout: ITimeout): number {
    if (timeout.duration === undefined) {
      timeout.duration = this.options.subscriptionTimeout;
    }
    if (timeout.event === undefined) {
      timeout.event = EVENT.ACK_TIMEOUT;
    }

    /*
    if (timeout.duration < 1) {
      should we throw an error?
      return -1
    }
    */

    if (!this.services.connection.isConnected) {
      return -1;
    }

    this.remove(timeout.message);

    const internalTimeout: IInternalTimeout = Object.assign({}, {
      event: timeout.event,
      timerId: -1,
      uniqueName: this.getUniqueName(timeout.message),
    }, { timeout });

    internalTimeout.timerId = this.services.timerRegistry.add({
      callback: this.onTimeout,
      context: this,
      data: internalTimeout,
      duration: timeout.duration,
    });
    this.register.set(internalTimeout.timerId, internalTimeout);
    this.ackRegister.set(internalTimeout.uniqueName, internalTimeout);
    return internalTimeout.timerId;
  }

  /**
   * Remove an entry
   */
  public remove(message: Message): void {
    let requestMsg;
    const action = RESPONSE_TO_REQUEST[message.topic][message.action];
    if (!action) {
      requestMsg = message;
    } else {
      requestMsg = Object.assign({}, message, { action });
    }

    const uniqueName = this.getUniqueName(requestMsg);
    const entry = this.ackRegister.get(uniqueName);
    if (entry) {
      this.clear(entry.timerId);
    }
  }

  /**
   * Processes an incoming ACK-message and removes the corresponding subscription
   */
  public clear(timerId: number): void {
    this.services.timerRegistry.remove(timerId);
    const entry = this.register.get(timerId);
    if (entry) {
      this.register.delete(timerId);
      this.ackRegister.delete(entry.uniqueName);
    }
  }

  /**
   * Remote all timeouts when connection disconnects
   */
  public onConnectionLost(): void {
    for (const [timerId] of this.register) {
      clearTimeout(timerId);
      this.register.delete(timerId);
    }
  }

  /**
   * Will be invoked if the timeout has occured before the ack message was received
   */
  private onTimeout(internalTimeout: IInternalTimeout): void {
    this.register.delete(internalTimeout.timerId);
    const timeout = internalTimeout.timeout;
    if (timeout.callback) {
      timeout.callback(timeout.event as EVENT, timeout.message);
    } else {
      this.services.logger.warn(timeout.message, timeout.event);
    }
  }

  /**
   * Returns a unique name from the timeout
   */
  private getUniqueName(message: Message): string {
    const action = message.originalAction || message.action;
    let name = `${message.topic}${action}_`;
    if (message.correlationId) {
      name += message.correlationId;
    } else if (message.name) {
      name += message.name;
    }
    return name;
  }
}
