import { RPC_ACTIONS as RPC_ACTION, RPCMessage, TOPIC } from "../../binary-protocol/src/message-constants";
import { IServices } from "../client";
import { IOptions } from "../client-options";

export type RPCMakeCallback = (error: string | null, result?: any) => void;

/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 */
export class RPC {
  private services: IServices;
  private options: IOptions;
  private name: string;
  private correlationId: string;
  private response: RPCMakeCallback;
  private acceptTimeout: number;
  private responseTimeout: number;

  constructor(
    name: string,
    correlationId: string,
    data: any,
    response: RPCMakeCallback,
    options: IOptions,
    services: IServices,
  ) {
    this.options = options;
    this.services = services;
    this.name = name;
    this.correlationId = correlationId;
    this.response = response;

    const message = {
      action: RPC_ACTION.REQUEST,
      correlationId,
      name,
      parsedData: data,
      topic: TOPIC.RPC,
    };

    this.acceptTimeout = this.services.timeoutRegistry.add({
      callback: this.onTimeout.bind(this),
      duration: this.options.rpcAcceptTimeout,
      event: RPC_ACTION.ACCEPT_TIMEOUT,
      message: {
        action: RPC_ACTION.ACCEPT,
        correlationId: this.correlationId,
        name: this.name,
        topic: TOPIC.RPC,
      },
    });

    this.responseTimeout = this.services.timeoutRegistry.add({
      callback: this.onTimeout.bind(this),
      duration: this.options.rpcResponseTimeout,
      event: RPC_ACTION.RESPONSE_TIMEOUT,
      message: {
        action: RPC_ACTION.REQUEST,
        correlationId: this.correlationId,
        name: this.name,
        topic: TOPIC.RPC,
      },
    });
    this.services.connection.sendMessage(message);
  }

  /**
   * Called once an ack message is received from the server
   */
  public accept(): void {
    this.services.timeoutRegistry.clear(this.acceptTimeout);
  }

  /**
   * Called once a response message is received from the server.
   */
  public respond(data: any) {
    this.response(null, data);
    this.complete();
  }

  /**
   * Called once an error is received from the server.
   */
  public error(data: any) {
    this.response(data);
    this.complete();
  }

  /**
   * Callback for error messages received from the server. Once
   * an error is received the request is considered completed. Even
   * if a response arrives later on it will be ignored / cause an
   * UNSOLICITED_MESSAGE error
   */
  private onTimeout(event: RPC_ACTION, message: RPCMessage) {
    this.response(RPC_ACTION[event]);
    this.complete();
  }

  /**
   * Called after either an error or a response
   * was received
   */
  private complete() {
    this.services.timeoutRegistry.clear(this.acceptTimeout);
    this.services.timeoutRegistry.clear(this.responseTimeout);
  }
}
