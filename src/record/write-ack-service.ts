import { Message, RECORD_ACTIONS } from "../../binary-protocol/src/message-constants";
import { ACTION_TO_WRITE_ACK } from "../../binary-protocol/src/utils";

import { IServices } from "../client";
import { EVENT } from "../constants";
import { WriteAckCallback } from "./record-core";

export class WriteAcknowledgementService {

  private services: IServices;
  private responses: Map<string, (...args: any[]) => any>;
  private count: number;

  constructor(services: IServices) {
    this.services = services;
    this.responses = new Map<string, WriteAckCallback>();
    this.count = 1;

    this.services.connection.onLost(this.onConnectionLost.bind(this));
  }

  /**
   * Send message with write ack callback.
   */
  public send(message: Message, callback: WriteAckCallback): void {
    if (!this.services.connection.isConnected) {
      this.services.timerRegistry.requestIdleCallback(callback.bind(this, EVENT.CLIENT_OFFLINE));
      return;
    }
    const correlationId = this.count.toString();
    this.responses.set(correlationId, callback);
    const messageToSend = Object.assign(
      {}, message, { correlationId, action: ACTION_TO_WRITE_ACK[message.action] },
    );
    this.services.connection.sendMessage(messageToSend);
    this.count++;
  }

  public recieve(message: Message): void {
    const id = message.correlationId as string;
    const response = this.responses.get(id);
    if (
      !response ||
      (message.action !== RECORD_ACTIONS.WRITE_ACKNOWLEDGEMENT && !message.isError)
    ) {
      return;
    }

    message.isError
      ? response(RECORD_ACTIONS[message.action as RECORD_ACTIONS])
      : response(null);

    this.responses.delete(id);
  }

  private onConnectionLost(): void {
    this.responses.forEach((response) => response(EVENT.CLIENT_OFFLINE));
    this.responses.clear();
  }
}
