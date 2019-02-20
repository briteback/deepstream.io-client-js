import {
  AUTH_ACTIONS as AUTH_ACTION,
  CONNECTION_ACTIONS as CONNECTION_ACTION,
  Message,
  PARSER_ACTIONS as PARSER_ACTION,
  ParseResult,
  TOPIC,
} from "../../binary-protocol/src/message-constants";
import {
  parseData,
} from "../../binary-protocol/src/message-parser";
import { CONNECTION_STATE, EVENT } from "../constants";

import * as Emitter from "component-emitter2";
import { IServices } from "../client";
import { IOptions } from "../client-options";
import { StateMachine } from "../util/state-machine";
import * as utils from "../util/utils";
import { ISocket, SOCKET_UNOPENED_ON_SEND, socketFactory } from "./socket-factory";
export type AuthenticationCallback = (success: boolean, clientData: object | null) => void;
export type ResumeCallback = (error?: object) => void;

const enum TRANSITIONS {
  INITIALISED = "initialised",
  CONNECTED = "connected",
  CHALLENGE = "challenge",
  AUTHENTICATE = "authenticate",
  RECONNECT = "reconnect",
  CHALLENGE_ACCEPTED = "accepted",
  CHALLENGE_DENIED = "challenge-denied",
  CONNECTION_REDIRECTED = "redirected",
  TOO_MANY_AUTH_ATTEMPTS = "too-many-auth-attempts",
  CLOSE = "close",
  CLOSED = "closed",
  UNSUCCESFUL_LOGIN = "unsuccesful-login",
  SUCCESFUL_LOGIN = "succesful-login",
  ERROR = "error",
  LOST = "connection-lost",
  PAUSE = "pause",
  OFFLINE = "offline",
  RESUME = "resume",
  EXIT_LIMBO = "exit-limbo",
  AUTHENTICATION_TIMEOUT = "authentication-timeout",
}

export class Connection {

  public get isConnected(): boolean {
    return this.stateMachine.state === CONNECTION_STATE.OPEN;
  }
  public emitter: Emitter;
  public isInLimbo: boolean;

  private internalEmitter: Emitter;
  private services: IServices;
  private options: IOptions;
  private stateMachine: StateMachine;
  private authParams: object | null;
  private clientData: object | null;
  private authCallback: AuthenticationCallback | null;
  private resumeCallback: ResumeCallback | null;
  private originalUrl: string;
  private url: string;
  private heartbeatInterval: number | null;
  private lastHeartBeat: number | null;
  private endpoint: ISocket | null;
  private handlers: Map<TOPIC, (...args: any[]) => void>;

  private reconnectTimeout: number | null;
  private reconnectionAttempt: number;
  private limboTimeout: number | null;
  private isReconnecting: boolean;
  private firstOpen: boolean;

  private authUnsuccessfulReconnectTimeout: number | null;

  constructor(services: IServices, options: IOptions, url: string, emitter: Emitter) {
    this.options = options;
    this.services = services;
    this.authParams = null;
    this.handlers = new Map();
    // tslint:disable-next-line:no-empty
    this.authCallback = null;
    this.resumeCallback = null;
    this.emitter = emitter;
    this.internalEmitter = new Emitter();
    this.isInLimbo = true;
    this.clientData = null;
    this.heartbeatInterval = null;
    this.lastHeartBeat = null;
    this.endpoint = null;
    this.reconnectTimeout = null;
    this.reconnectionAttempt = 0;
    this.limboTimeout = null;
    this.isReconnecting = false;
    this.firstOpen = true;
    this.authUnsuccessfulReconnectTimeout = null;

    this.stateMachine = new StateMachine(
      this.services.logger,
      {
        init: CONNECTION_STATE.CLOSED,
        onStateChanged: (newState: string, oldState: string) => {
          if (newState === oldState) {
            return;
          }
          emitter.emit(EVENT.CONNECTION_STATE_CHANGED, newState);

          if (newState === CONNECTION_STATE.RECONNECTING) {
            this.isInLimbo = true;
            this.isReconnecting = true;
            if (oldState !== CONNECTION_STATE.CLOSED) {
              this.internalEmitter.emit(EVENT.CONNECTION_LOST);
              if (this.limboTimeout) {
                this.services.timerRegistry.remove(this.limboTimeout as number);
              }
              this.limboTimeout = this.services.timerRegistry.add({
                callback: () => {
                  this.isInLimbo = false;
                  this.internalEmitter.emit(EVENT.EXIT_LIMBO);
                },
                context: this,
                duration: this.options.offlineBufferTimeout,
              });
            }
          } else if (newState === CONNECTION_STATE.OPEN && (this.isReconnecting || this.firstOpen)) {
            this.firstOpen = false;
            this.isInLimbo = false;
            this.internalEmitter.emit(EVENT.CONNECTION_REESTABLISHED);
            this.services.timerRegistry.remove(this.limboTimeout as number);
            this.limboTimeout = null;
          }
        },
        transitions: [
          {
            from: CONNECTION_STATE.CLOSED,
            name: TRANSITIONS.INITIALISED,
            to: CONNECTION_STATE.INITIALISING,
          },
          {
            from: CONNECTION_STATE.INITIALISING,
            name: TRANSITIONS.CONNECTED,
            to: CONNECTION_STATE.AWAITING_CONNECTION,
          },
          {
            from: CONNECTION_STATE.REDIRECTING,
            name: TRANSITIONS.CONNECTED,
            to: CONNECTION_STATE.AWAITING_CONNECTION,
          },
          {
            from: CONNECTION_STATE.RECONNECTING,
            name: TRANSITIONS.CONNECTED,
            to: CONNECTION_STATE.AWAITING_CONNECTION,
          },
          {
            from: CONNECTION_STATE.AWAITING_CONNECTION,
            name: TRANSITIONS.CHALLENGE,
            to: CONNECTION_STATE.CHALLENGING,
          },
          {
            from: CONNECTION_STATE.CHALLENGING,
            name: TRANSITIONS.CONNECTION_REDIRECTED,
            to: CONNECTION_STATE.REDIRECTING,
          },
          {
            from: CONNECTION_STATE.CHALLENGING,
            name: TRANSITIONS.CHALLENGE_DENIED,
            to: CONNECTION_STATE.CHALLENGE_DENIED,
          },
          {
            from: CONNECTION_STATE.CHALLENGING,
            handler: this.onAwaitingAuthentication.bind(this),
            name: TRANSITIONS.CHALLENGE_ACCEPTED,
            to: CONNECTION_STATE.AWAITING_AUTHENTICATION,
          },
          {
            from: CONNECTION_STATE.AWAITING_CONNECTION,
            name: TRANSITIONS.AUTHENTICATION_TIMEOUT,
            to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
          },
          {
            from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
            name: TRANSITIONS.AUTHENTICATION_TIMEOUT,
            to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
          },
          {
            from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
            name: TRANSITIONS.AUTHENTICATE,
            to: CONNECTION_STATE.AUTHENTICATING,
          },
          {
            from: CONNECTION_STATE.AUTHENTICATING,
            name: TRANSITIONS.UNSUCCESFUL_LOGIN,
            to: CONNECTION_STATE.AWAITING_AUTHENTICATION,
          },
          {
            from: CONNECTION_STATE.AUTHENTICATING,
            name: TRANSITIONS.SUCCESFUL_LOGIN,
            to: CONNECTION_STATE.OPEN,
          },
          {
            from: CONNECTION_STATE.AUTHENTICATING,
            name: TRANSITIONS.TOO_MANY_AUTH_ATTEMPTS,
            to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS,
          },
          {
            from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
            name: TRANSITIONS.TOO_MANY_AUTH_ATTEMPTS,
            to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS,
          },
          {
            from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
            name: TRANSITIONS.AUTHENTICATION_TIMEOUT,
            to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
          },
          {
            from: CONNECTION_STATE.RECONNECTING,
            name: TRANSITIONS.RECONNECT,
            to: CONNECTION_STATE.RECONNECTING,
          },
          {
            from: CONNECTION_STATE.CLOSING,
            name: TRANSITIONS.CLOSED,
            to: CONNECTION_STATE.CLOSED,
          },
          {
            from: CONNECTION_STATE.PAUSING,
            name: TRANSITIONS.OFFLINE,
            to: CONNECTION_STATE.OFFLINE,
          },
          {
            name: TRANSITIONS.ERROR,
            to: CONNECTION_STATE.RECONNECTING,
          },
          {
            name: TRANSITIONS.LOST,
            to: CONNECTION_STATE.RECONNECTING,
          },
          {
            name: TRANSITIONS.RESUME,
            to: CONNECTION_STATE.RECONNECTING,
          },
          {
            name: TRANSITIONS.PAUSE,
            to: CONNECTION_STATE.PAUSING,
          },
          {
            name: TRANSITIONS.CLOSE,
            to: CONNECTION_STATE.CLOSING,
          },
        ],
      },
    );
    this.stateMachine.transition(TRANSITIONS.INITIALISED);
    this.originalUrl = utils.parseUrl(url, this.options.path);
    this.url = this.originalUrl;

    if (!options.lazyConnect) {
      this.createEndpoint();
    }

    this.internalEmitter.on(SOCKET_UNOPENED_ON_SEND, () => {
      if (this.endpoint &&
          (this.endpoint.readyState === this.endpoint.CLOSING ||
           this.endpoint.readyState === this.endpoint.CLOSED)) {
        this.forceReconnect();
      } else {
        this.services.logger.E("Trying to send messages before socket is opened?");
      }
    });
  }

  public onLost(callback: () => void): void {
    this.internalEmitter.on(EVENT.CONNECTION_LOST, callback);
  }

  public removeOnLost(callback: () => void): void {
    this.internalEmitter.off(EVENT.CONNECTION_LOST, callback);
  }

  public onReestablished(callback: () => void): void {
    this.internalEmitter.on(EVENT.CONNECTION_REESTABLISHED, callback);
  }

  public removeOnReestablished(callback: () => void): void {
    this.internalEmitter.off(EVENT.CONNECTION_REESTABLISHED, callback);
  }

  public onExitLimbo(callback: () => void): void {
    this.internalEmitter.on(EVENT.EXIT_LIMBO, callback);
  }

  public registerHandler(topic: TOPIC, callback: () => void): void {
    this.handlers.set(topic, callback);
  }

  public sendMessage(message: Message): void {
    if (!this.isOpen()) {
      this.services.logger.error(message, EVENT.IS_CLOSED);
      return;
    }
    if (this.endpoint) {
      this.endpoint.sendParsedMessage(message);
    }
  }

  /**
   * Sends the specified authentication parameters
   * to the server. Can be called up to <maxAuthAttempts>
   * times for the same connection.
   */
  public authenticate(authParamsOrCallback?: object | null, callback?: AuthenticationCallback | null): void {
    if (
      authParamsOrCallback &&
        typeof authParamsOrCallback !== "object" &&
        typeof authParamsOrCallback !== "function"
    ) {
      throw new Error("invalid argument authParamsOrCallback");
    }
    if (callback && typeof callback !== "function") {
      throw new Error("invalid argument callback");
    }

    if (
      this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED ||
        this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
        this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT
    ) {
      this.services.logger.error({ topic: TOPIC.CONNECTION }, EVENT.IS_CLOSED);
      return;
    }

    if (authParamsOrCallback) {
      this.authParams = typeof authParamsOrCallback === "object" ? authParamsOrCallback : {};
    }

    if (authParamsOrCallback && typeof authParamsOrCallback === "function") {
      this.authCallback = authParamsOrCallback as AuthenticationCallback;
    } else if (callback) {
      this.authCallback = callback;
    } else {
      // tslint:disable-next-line
      this.authCallback = () => {};
    }

    // if (this.stateMachine.state === CONNECTION_STATE.CLOSED && !this.endpoint) {
    //   this.createEndpoint()
    //   return
    // }

    if (this.stateMachine.state === CONNECTION_STATE.AWAITING_AUTHENTICATION && this.authParams) {
      this.sendAuthParams();
    }

    if (!this.endpoint) {
      this.createEndpoint();
    }
  }

  /*
   * Returns the current connection state.
   */
  public getConnectionState(): CONNECTION_STATE {
    return this.stateMachine.state;
  }

  /**
   * Closes the connection. Using this method
   * will prevent the client from reconnecting.
   */
  public close(): void {
    this.services.timerRegistry.remove(this.heartbeatInterval as number);
    this.sendMessage({
      action: CONNECTION_ACTION.CLOSING,
      topic: TOPIC.CONNECTION,
    });
    this.stateMachine.transition(TRANSITIONS.CLOSE);
  }

  public pause(): void {
    this.stateMachine.transition(TRANSITIONS.PAUSE);
    this.services.timerRegistry.remove(this.heartbeatInterval as number);
    if (this.endpoint) {
      this.endpoint.close();
    }
  }

  public resume(callback: ResumeCallback): void {
    this.stateMachine.transition(TRANSITIONS.RESUME);
    this.resumeCallback = callback;
    this.tryReconnect();
  }

  /**
   * Forces a new connection and does not wait for the current socket to close.
   * On OSX and iOS it happens that the current socket is dead but looks alive.
   * Calling forceReconnect will regardles of current state reset and set up a
   * new connection
   */
  public forceReconnect(): void {
    if (this.endpoint) {
      this.endpoint.onopen = null;
      this.endpoint.onerror = null;
      this.endpoint.onclose = null;
      // tslint:disable-next-line
      this.endpoint.onparsedmessages = (messages: Message[]) => {};
    }

    utils.tryWrap(() => this.clearReconnect(), this.services.logger.E);
    utils.tryWrap(() => this.close(), this.services.logger.E);

    this.stateMachine.resetToInitialState();
    this.stateMachine.transition(TRANSITIONS.INITIALISED);
    this.isInLimbo = true;
    this.firstOpen = true;
    this.isReconnecting = false;

    this.createEndpoint();
  }

  private isOpen(): boolean {
    const connState = this.getConnectionState();
    return connState !== CONNECTION_STATE.CLOSED
      && connState !== CONNECTION_STATE.ERROR
      && connState !== CONNECTION_STATE.CLOSING;
  }

  /**
   * Creates the endpoint to connect to using the url deepstream
   * was initialised with.
   */
  private createEndpoint(): void {
    this.endpoint = socketFactory(this.url, this.options.socketOptions, this.internalEmitter);

    this.endpoint.onopen = this.onOpen.bind(this);
    this.endpoint.onerror = this.onError.bind(this);
    this.endpoint.onclose = this.onClose.bind(this);
    this.endpoint.onparsedmessages = this.onMessages.bind(this);
  }

  /********************************
   ****** Endpoint Callbacks ******
  /********************************/

  /**
   * Will be invoked once the connection is established. The client
   * can't send messages yet, and needs to get a connection ACK or REDIRECT
   * from the server before authenticating
   */
  private onOpen(): void {
    this.clearReconnect();
    this.lastHeartBeat = Date.now();
    this.checkHeartBeat();
    this.stateMachine.transition(TRANSITIONS.CONNECTED);
    this.sendMessage({
      action: CONNECTION_ACTION.CHALLENGE,
      protocolVersion: "0.1a",
      topic: TOPIC.CONNECTION,
      url: this.originalUrl,
    });
    this.stateMachine.transition(TRANSITIONS.CHALLENGE);
  }

  /**
   * Callback for generic connection errors. Forwards
   * the error to the client.
   *
   * The connection is considered broken once this method has been
   * invoked.
   */
  private onError(error: NodeJS.ErrnoException) {
    /*
     * If the implementation isn't listening on the error event this will throw
     * an error. So let's defer it to allow the reconnection to kick in.
     */
    setTimeout(() => {
      let msg;
      if (error.code === "ECONNRESET" || error.code === "ECONNREFUSED") {
        msg = `Can't connect! Deepstream server unreachable on ${this.originalUrl}`;
      } else {
        try {
          msg = JSON.stringify(error);
        } catch (e) {
          msg = error.toString();
        }
      }
      this.services.logger.error({ topic: TOPIC.CONNECTION }, EVENT.CONNECTION_ERROR, msg);
    }, 1);

    this.services.timerRegistry.remove(this.heartbeatInterval as number);
    this.stateMachine.transition(TRANSITIONS.ERROR);
    this.tryReconnect();
  }

  /**
   * Callback when the connection closes. This might have been a deliberate
   * close triggered by the client or the result of the connection getting
   * lost.
   *
   * In the latter case the client will try to reconnect using the configured
   * strategy.
   */
  private onClose(): void {
    this.services.timerRegistry.remove(this.heartbeatInterval as number);

    if (this.stateMachine.state === CONNECTION_STATE.REDIRECTING) {
      this.createEndpoint();
      return;
    }

    if (
      this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED ||
        this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
        this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT
    ) {
      return;
    }

    if (this.stateMachine.state === CONNECTION_STATE.CLOSING) {
      this.stateMachine.transition(TRANSITIONS.CLOSED);
      return;
    }

    if (this.stateMachine.state === CONNECTION_STATE.PAUSING) {
      this.stateMachine.transition(TRANSITIONS.OFFLINE);
      return;
    }

    this.stateMachine.transition(TRANSITIONS.LOST);
    this.tryReconnect();
  }

  /**
   * Callback for messages received on the connection.
   */
  private onMessages(parseResults: ParseResult[]): void {
    parseResults.forEach((parseResult) => {
      if (parseResult.parseError) {
        this.services.logger.error(
          { topic: TOPIC.PARSER },
          parseResult.action,
          parseResult.raw && parseResult.raw.toString(),
        );
        return;
      }
      const message: any = parseResult;
      const res = parseData(message);
      if (res !== true) {
        this.services.logger.error({ topic: TOPIC.PARSER }, PARSER_ACTION.INVALID_MESSAGE, res);
      }
      if (message === null) {
        return;
      }
      if (message.topic === TOPIC.CONNECTION) {
        this.handleConnectionResponse(message);
        return;
      }
      if (message.topic === TOPIC.AUTH) {
        this.handleAuthResponse(message);
        return;
      }
      const handler = this.handlers.get(message.topic);
      if (!handler) {
        // this should never happen
        return;
      }
      handler(message);
    });
  }

  /**
   * Sends authentication params to the server. Please note, this
   * doesn't use the queued message mechanism, but rather sends the message directly
   */
  private sendAuthParams(): void {
    this.stateMachine.transition(TRANSITIONS.AUTHENTICATE);
    this.sendMessage({
      action: AUTH_ACTION.REQUEST,
      parsedData: this.authParams,
      topic: TOPIC.AUTH,
    });
  }

  /**
   * Ensures that a heartbeat was not missed more than once, otherwise it considers the connection
   * to have been lost and closes it for reconnection.
   */
  private checkHeartBeat(): void {
    const heartBeatTolerance = this.options.heartbeatInterval * 2;

    if (Date.now() - (this.lastHeartBeat as number) > heartBeatTolerance) {
      this.services.timerRegistry.remove(this.heartbeatInterval as number);
      this.services.logger.error({ topic: TOPIC.CONNECTION }, EVENT.HEARTBEAT_TIMEOUT);
      if (this.endpoint) {
        this.endpoint.close();
      }
      return;
    }

    this.heartbeatInterval = this.services.timerRegistry.add({
      callback: this.checkHeartBeat,
      context: this,
      duration: this.options.heartbeatInterval,
    });
  }

  /**
   * If the connection drops or is closed in error this
   * method schedules increasing reconnection intervals
   *
   * If the number of failed reconnection attempts exceeds
   * options.maxReconnectAttempts the connection is closed
   */
  private tryReconnect(): void {
    if (this.reconnectTimeout !== null) {
      return;
    }
    if (this.reconnectionAttempt < this.options.maxReconnectAttempts) {
      this.stateMachine.transition(TRANSITIONS.RECONNECT);
      this.reconnectTimeout = setTimeout(
        this.tryOpen.bind(this),
        Math.min(
          this.options.maxReconnectInterval,
          this.options.reconnectIntervalIncrement * this.reconnectionAttempt,
        ),
      );
      this.reconnectionAttempt++;
      return;
    }

    this.emitter.emit(EVENT[EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED], this.reconnectionAttempt);
    this.clearReconnect();
    this.close();
  }

  /**
   * Attempts to open a errourosly closed connection
   */
  private tryOpen(): void {
    if (this.stateMachine.state !== CONNECTION_STATE.REDIRECTING) {
      this.url = this.originalUrl;
    }
    this.createEndpoint();
    this.reconnectTimeout = null;
  }

  /**
   * Stops all further reconnection attempts,
   * either because the connection is open again
   * or because the maximal number of reconnection
   * attempts has been exceeded
   */
  private clearReconnect(): void {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }
    this.reconnectTimeout = null;
    this.reconnectionAttempt = 0;
  }

  /**
   * The connection response will indicate whether the deepstream connection
   * can be used or if it should be forwarded to another instance. This
   * allows us to introduce load-balancing if needed.
   *
   * If authentication parameters are already provided this will kick of
   * authentication immediately. The actual 'open' event won't be emitted
   * by the client until the authentication is successful.
   *
   * If a challenge is recieved, the user will send the url to the server
   * in response to get the appropriate redirect. If the URL is invalid the
   * server will respond with a REJECTION resulting in the client connection
   * being permanently closed.
   *
   * If a redirect is recieved, this connection is closed and updated with
   * a connection to the url supplied in the message.
   */
  private handleConnectionResponse(message: Message): void {
    if (message.action === CONNECTION_ACTION.PING) {
      this.lastHeartBeat = Date.now();
      if (
        this.getConnectionState() !== CONNECTION_STATE.CLOSING &&
          this.getConnectionState() !== CONNECTION_STATE.PAUSING
      ) {
        this.sendMessage({ topic: TOPIC.CONNECTION, action: CONNECTION_ACTION.PONG });
      }
      return;
    }

    if (message.action === CONNECTION_ACTION.ACCEPT) {
      this.stateMachine.transition(TRANSITIONS.CHALLENGE_ACCEPTED);
      return;
    }

    if (message.action === CONNECTION_ACTION.REJECT) {
      this.stateMachine.transition(TRANSITIONS.CHALLENGE_DENIED);
      if (this.endpoint) {
        this.endpoint.close();
      }
      return;
    }

    if (message.action === CONNECTION_ACTION.REDIRECT) {
      this.url = message.url as string;
      this.stateMachine.transition(TRANSITIONS.CONNECTION_REDIRECTED);
      if (this.endpoint) {
        this.endpoint.close();
      }
      return;
    }

    if (message.action === CONNECTION_ACTION.AUTHENTICATION_TIMEOUT) {
      this.stateMachine.transition(TRANSITIONS.AUTHENTICATION_TIMEOUT);
      this.services.logger.error(message);
    }
  }

  /**
   * Callback for messages received for the AUTH topic. If
   * the authentication was successful this method will
   * open the connection and send all messages that the client
   * tried to send so far.
   */
  private handleAuthResponse(message: Message): void {
    if (message.action === AUTH_ACTION.TOO_MANY_AUTH_ATTEMPTS) {
      this.stateMachine.transition(TRANSITIONS.TOO_MANY_AUTH_ATTEMPTS);
      this.services.logger.error(message);
      return;
    }

    if (message.action === AUTH_ACTION.AUTH_UNSUCCESSFUL) {
      this.stateMachine.transition(TRANSITIONS.UNSUCCESFUL_LOGIN);
      this.onAuthUnSuccessful();
      return;
    }

    if (message.action === AUTH_ACTION.AUTH_SUCCESSFUL) {
      this.stateMachine.transition(TRANSITIONS.SUCCESFUL_LOGIN);
      this.onAuthSuccessful(message.parsedData);
      return;
    }
  }

  private onAwaitingAuthentication(): void {
    if (this.authParams) {
      this.sendAuthParams();
    }
  }

  private onAuthSuccessful(clientData: any): void {
    this.updateClientData(clientData);
    if (this.resumeCallback) {
      this.resumeCallback();
      this.resumeCallback = null;
    }
    if (this.authCallback === null) {
      return;
    }

    this.authCallback(true, this.clientData);
    this.authCallback = null;
  }

  private onAuthUnSuccessful(): void {
    // this is super ugly but we need a way to try again when the servers is not up
    // and normal reconnect is not working for scenarios like this (yet)
    clearTimeout(this.authUnsuccessfulReconnectTimeout as any);
    this.authUnsuccessfulReconnectTimeout = setTimeout(() => this.sendAuthParams(), this.options.maxReconnectInterval) as any;
    return;
    /*const reason = { reason: EVENT[EVENT.INVALID_AUTHENTICATION_DETAILS] };
    if (this.resumeCallback) {
      this.resumeCallback(reason);
      this.resumeCallback = null;
    }
    if (this.authCallback === null) {
      this.emitter.emit(EVENT.REAUTHENTICATION_FAILURE, reason);
      return;
    }

    this.authCallback(false, reason);
    this.authCallback = null;*/
  }

  private updateClientData(data: any) {
    const newClientData = data || null;
    if (
      this.clientData === null &&
        (newClientData === null || Object.keys(newClientData).length === 0)
    ) {
      return;
    }

    if (!utils.deepEquals(this.clientData, data)) {
      this.emitter.emit(EVENT.CLIENT_DATA_CHANGED, Object.assign({}, newClientData));
      this.clientData = newClientData;
    }
  }
}
