import { RPC_ACTIONS as RPC_ACTION, RPCMessage, TOPIC } from "../../binary-protocol/src/message-constants";
import { IServices } from "../client";
import { IOptions } from "../client-options";

/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 */
export class RPCResponse {

  public autoAccept: boolean;
  private services: IServices;
  private name: string;
  private correlationId: string;
  private isAccepted: boolean;
  private isComplete: boolean;

  constructor(message: RPCMessage, options: IOptions, services: IServices) {
    this.name = message.name as string;
    this.correlationId = message.correlationId as string;
    this.services = services;
    this.isAccepted = false;
    this.isComplete = false;
    this.autoAccept = true;
    this.services.timerRegistry.requestIdleCallback(this.performAutoAck.bind(this));
  }

  /**
   * Acknowledges the receipt of the request. This
   * will happen implicitly unless the request callback
   * explicitly sets autoAck to false
   */
  public accept() {
    if (this.isAccepted === false) {
      this.services.connection.sendMessage({
        action: RPC_ACTION.ACCEPT,
        correlationId: this.correlationId,
        name: this.name,
        topic: TOPIC.RPC,
      });
      this.isAccepted = true;
    }
  }

  /**
   * Reject the request. This might be necessary if the client
   * is already processing a large number of requests. If deepstream
   * receives a rejection message it will try to route the request to
   * another provider - or return a NO_RPC_PROVIDER error if there are no
   * providers left
   */
  public reject(): void {
    if (this.isComplete === true) {
      throw new Error(`Rpc ${this.name} already completed`);
    }
    this.autoAccept = false;
    this.isComplete = true;
    this.isAccepted = true;
    this.services.connection.sendMessage({
      action: RPC_ACTION.REJECT,
      correlationId: this.correlationId,
      name: this.name,
      topic: TOPIC.RPC,
    });
  }

  /**
   * Notifies the server that an error has occured while trying to process the request.
   * This will complete the rpc.
   */
  public error(error: any): void {
    if (this.isComplete === true) {
      throw new Error(`Rpc ${this.name} already completed`);
    }
    error = error || "Error";
    this.autoAccept = false;
    this.isComplete = true;
    this.isAccepted = true;
    this.services.connection.sendMessage({
      action: RPC_ACTION.REQUEST_ERROR,
      correlationId: this.correlationId,
      name: this.name,
      parsedData: error,
      topic: TOPIC.RPC,
    });
  }

  /**
   * Completes the request by sending the response data
   * to the server. If data is an array or object it will
   * automatically be serialised.
   * If autoAck is disabled and the response is sent before
   * the ack message the request will still be completed and the
   * ack message ignored
   */
  public send(data: any): void {
    if (this.isComplete === true) {
      throw new Error(`Rpc ${this.name} already completed`);
    }
    this.accept();

    this.services.connection.sendMessage({
      action: RPC_ACTION.RESPONSE,
      correlationId: this.correlationId,
      name: this.name,
      parsedData: data,
      topic: TOPIC.RPC,
    });
    this.isComplete = true;
  }

  /**
   * Callback for the autoAck timeout. Executes ack
   * if autoAck is not disabled
   */
  private performAutoAck(): void {
    if (this.autoAccept === true) {
      this.accept();
    }
  }
}
