import {
  EVENT_ACTIONS,
  EventMessage,
  RECORD_ACTIONS,
  RecordMessage,
  TOPIC,
} from "../../binary-protocol/src/message-constants";
import { EVENT } from "../../src/constants";
import { IServices } from "../client";

export interface IListenResponse {
  accept: () => void;
  reject: (reason?: string) => void;
  onStop: (callback: (subscriptionName: string) => void) => void;
}

export type ListenCallback = (subscriptionName: string, listenResponse: IListenResponse) => void;

export class Listener {
  private topic: TOPIC;
  private actions: any;
  private services: IServices;
  private listeners: Map<string, ListenCallback>; // <patterm, callback>
  private stopCallbacks: Map<string, (...args: any[]) => void>; // <subscription, callback>

  constructor(topic: TOPIC, services: IServices) {
    this.topic = topic;
    this.services = services;
    this.listeners = new Map<string, ListenCallback>();
    this.stopCallbacks = new Map<string, (...args: any[]) => void>();

    if (topic === TOPIC.RECORD) {
      this.actions = RECORD_ACTIONS;
    } else if (topic === TOPIC.EVENT) {
      this.actions = EVENT_ACTIONS;
    }

    this.services.connection.onLost(this.onConnectionLost.bind(this));
    this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
  }

  public listen(pattern: string, callback: ListenCallback): void {
    if (typeof pattern !== "string" || pattern.length === 0) {
      throw new Error("invalid argument pattern");
    }
    if (typeof callback !== "function") {
      throw new Error("invalid argument callback");
    }

    if (this.listeners.has(pattern)) {
      this.services.logger.warn({
        action: EVENT.LISTENER_EXISTS,
        name: pattern,
        topic: this.topic,
      });
      return;
    }

    this.listeners.set(pattern, callback);
    this.sendListen(pattern);
  }

  public unlisten(pattern: string): void {
    if (typeof pattern !== "string" || pattern.length === 0) {
      throw new Error("invalid argument pattern");
    }

    if (!this.listeners.has(pattern)) {
      this.services.logger.warn({
        action: EVENT.NOT_LISTENING,
        name: pattern,
        topic: this.topic,
      });
      return;
    }

    this.listeners.delete(pattern);
    this.sendUnlisten(pattern);
  }

  public handle(message: EventMessage | RecordMessage) {
    if (message.isAck) {
      this.services.timeoutRegistry.remove(message);
      return;
    }
    if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_FOUND) {
      const listener = this.listeners.get(message.name as string);
      if (listener) {
        listener(
          message.subscription as string, {
            accept: this.accept.bind(this, message.name, message.subscription),
            onStop: this.stop.bind(this, message.subscription),
            reject: this.reject.bind(this, message.name, message.subscription),
          },
        );
      }
      return;
    }

    if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
      const stopCallback = this.stopCallbacks.get(message.subscription as string);
      if (stopCallback) {
        stopCallback(message.subscription);
        this.stopCallbacks.delete(message.subscription as string);
      }
      return;
    }

    this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
  }

  /**
   * Accepting a listener request informs deepstream that the current provider is willing to
   * provide the record or event matching the subscriptionName . This will establish the current
   * provider as the only publisher for the actual subscription with the deepstream cluster.
   * Either accept or reject needs to be called by the listener
   */
  private accept(pattern: string, subscription: string): void {
    this.services.connection.sendMessage({
      action: this.actions.LISTEN_ACCEPT,
      name: pattern,
      subscription,
      topic: this.topic,
    });
  }

  /**
   * Rejecting a listener request informs deepstream that the current provider is not willing
   * to provide the record or event matching the subscriptionName . This will result in deepstream
   * requesting another provider to do so instead. If no other provider accepts or exists, the
   * resource will remain unprovided.
   * Either accept or reject needs to be called by the listener
   */
  private reject(pattern: string, subscription: string): void {
    this.services.connection.sendMessage({
      action: this.actions.LISTEN_REJECT,
      name: pattern,
      subscription,
      topic: this.topic,
    });
  }

  private stop(subscription: string, callback: (...args: any[]) => void): void {
    this.stopCallbacks.set(subscription, callback);
  }

  private onConnectionLost() {
    this.stopCallbacks.forEach((callback, subscription) => {
      callback(subscription);
    });
    this.stopCallbacks.clear();
  }

  private onConnectionReestablished() {
    this.listeners.forEach((callback, pattern) => {
      this.sendListen(pattern);
    });
  }

  /*
  * Sends a C.ACTIONS.LISTEN to deepstream.
  */
  private sendListen(pattern: string): void {
    const message = {
      action: this.actions.LISTEN,
      name: pattern,
      topic: this.topic,
    };
    this.services.timeoutRegistry.add({ message });
    this.services.connection.sendMessage(message);
  }

  private sendUnlisten(pattern: string): void {
    const message = {
      action: this.actions.UNLISTEN,
      name: pattern,
      topic: this.topic,
    };
    this.services.timeoutRegistry.add({ message });
    this.services.connection.sendMessage(message);
  }
}
