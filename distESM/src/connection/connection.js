import { AUTH_ACTIONS as AUTH_ACTION, CONNECTION_ACTIONS as CONNECTION_ACTION, PARSER_ACTIONS as PARSER_ACTION, TOPIC, } from "../../binary-protocol/src/message-constants";
import { parseData, } from "../../binary-protocol/src/message-parser";
import { CONNECTION_STATE, EVENT } from "../constants";
import * as Emitter from "component-emitter2";
import { StateMachine } from "../util/state-machine";
import * as utils from "../util/utils";
import { SOCKET_UNOPENED_ON_SEND, socketFactory } from "./socket-factory";
export class Connection {
    get isConnected() {
        return this.stateMachine.state === CONNECTION_STATE.OPEN;
    }
    constructor(services, options, url, emitter) {
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
        this.stateMachine = new StateMachine(this.services.logger, {
            init: CONNECTION_STATE.CLOSED,
            onStateChanged: (newState, oldState) => {
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
                            this.services.timerRegistry.remove(this.limboTimeout);
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
                }
                else if (newState === CONNECTION_STATE.OPEN && (this.isReconnecting || this.firstOpen)) {
                    this.firstOpen = false;
                    this.isInLimbo = false;
                    this.internalEmitter.emit(EVENT.CONNECTION_REESTABLISHED);
                    this.services.timerRegistry.remove(this.limboTimeout);
                    this.limboTimeout = null;
                }
            },
            transitions: [
                {
                    from: CONNECTION_STATE.CLOSED,
                    name: "initialised" /* INITIALISED */,
                    to: CONNECTION_STATE.INITIALISING,
                },
                {
                    from: CONNECTION_STATE.INITIALISING,
                    name: "connected" /* CONNECTED */,
                    to: CONNECTION_STATE.AWAITING_CONNECTION,
                },
                {
                    from: CONNECTION_STATE.REDIRECTING,
                    name: "connected" /* CONNECTED */,
                    to: CONNECTION_STATE.AWAITING_CONNECTION,
                },
                {
                    from: CONNECTION_STATE.RECONNECTING,
                    name: "connected" /* CONNECTED */,
                    to: CONNECTION_STATE.AWAITING_CONNECTION,
                },
                {
                    from: CONNECTION_STATE.AWAITING_CONNECTION,
                    name: "challenge" /* CHALLENGE */,
                    to: CONNECTION_STATE.CHALLENGING,
                },
                {
                    from: CONNECTION_STATE.CHALLENGING,
                    name: "redirected" /* CONNECTION_REDIRECTED */,
                    to: CONNECTION_STATE.REDIRECTING,
                },
                {
                    from: CONNECTION_STATE.CHALLENGING,
                    name: "challenge-denied" /* CHALLENGE_DENIED */,
                    to: CONNECTION_STATE.CHALLENGE_DENIED,
                },
                {
                    from: CONNECTION_STATE.CHALLENGING,
                    handler: this.onAwaitingAuthentication.bind(this),
                    name: "accepted" /* CHALLENGE_ACCEPTED */,
                    to: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                },
                {
                    from: CONNECTION_STATE.AWAITING_CONNECTION,
                    name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */,
                    to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
                },
                {
                    from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                    name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */,
                    to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
                },
                {
                    from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                    name: "authenticate" /* AUTHENTICATE */,
                    to: CONNECTION_STATE.AUTHENTICATING,
                },
                {
                    from: CONNECTION_STATE.AUTHENTICATING,
                    name: "unsuccesful-login" /* UNSUCCESFUL_LOGIN */,
                    to: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                },
                {
                    from: CONNECTION_STATE.AUTHENTICATING,
                    name: "succesful-login" /* SUCCESFUL_LOGIN */,
                    to: CONNECTION_STATE.OPEN,
                },
                {
                    from: CONNECTION_STATE.AUTHENTICATING,
                    name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */,
                    to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS,
                },
                {
                    from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                    name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */,
                    to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS,
                },
                {
                    from: CONNECTION_STATE.AWAITING_AUTHENTICATION,
                    name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */,
                    to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT,
                },
                {
                    from: CONNECTION_STATE.RECONNECTING,
                    name: "reconnect" /* RECONNECT */,
                    to: CONNECTION_STATE.RECONNECTING,
                },
                {
                    from: CONNECTION_STATE.CLOSING,
                    name: "closed" /* CLOSED */,
                    to: CONNECTION_STATE.CLOSED,
                },
                {
                    from: CONNECTION_STATE.PAUSING,
                    name: "offline" /* OFFLINE */,
                    to: CONNECTION_STATE.OFFLINE,
                },
                {
                    name: "error" /* ERROR */,
                    to: CONNECTION_STATE.RECONNECTING,
                },
                {
                    name: "connection-lost" /* LOST */,
                    to: CONNECTION_STATE.RECONNECTING,
                },
                {
                    name: "resume" /* RESUME */,
                    to: CONNECTION_STATE.RECONNECTING,
                },
                {
                    name: "pause" /* PAUSE */,
                    to: CONNECTION_STATE.PAUSING,
                },
                {
                    name: "close" /* CLOSE */,
                    to: CONNECTION_STATE.CLOSING,
                },
            ],
        });
        this.stateMachine.transition("initialised" /* INITIALISED */);
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
            }
            else {
                this.services.logger.E("Trying to send messages before socket is opened?");
            }
        });
    }
    onLost(callback) {
        this.internalEmitter.on(EVENT.CONNECTION_LOST, callback);
    }
    removeOnLost(callback) {
        this.internalEmitter.off(EVENT.CONNECTION_LOST, callback);
    }
    onReestablished(callback) {
        this.internalEmitter.on(EVENT.CONNECTION_REESTABLISHED, callback);
    }
    removeOnReestablished(callback) {
        this.internalEmitter.off(EVENT.CONNECTION_REESTABLISHED, callback);
    }
    onExitLimbo(callback) {
        this.internalEmitter.on(EVENT.EXIT_LIMBO, callback);
    }
    registerHandler(topic, callback) {
        this.handlers.set(topic, callback);
    }
    sendMessage(message) {
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
    authenticate(authParamsOrCallback, callback) {
        if (authParamsOrCallback &&
            typeof authParamsOrCallback !== "object" &&
            typeof authParamsOrCallback !== "function") {
            throw new Error("invalid argument authParamsOrCallback");
        }
        if (callback && typeof callback !== "function") {
            throw new Error("invalid argument callback");
        }
        if (this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED ||
            this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
            this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
            this.services.logger.error({ topic: TOPIC.CONNECTION }, EVENT.IS_CLOSED);
            return;
        }
        if (authParamsOrCallback) {
            this.authParams = typeof authParamsOrCallback === "object" ? authParamsOrCallback : {};
        }
        if (authParamsOrCallback && typeof authParamsOrCallback === "function") {
            this.authCallback = authParamsOrCallback;
        }
        else if (callback) {
            this.authCallback = callback;
        }
        else {
            // tslint:disable-next-line
            this.authCallback = () => { };
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
    getConnectionState() {
        return this.stateMachine.state;
    }
    /**
     * Closes the connection. Using this method
     * will prevent the client from reconnecting.
     */
    close() {
        this.services.timerRegistry.remove(this.heartbeatInterval);
        this.sendMessage({
            action: CONNECTION_ACTION.CLOSING,
            topic: TOPIC.CONNECTION,
        });
        this.stateMachine.transition("close" /* CLOSE */);
    }
    pause() {
        this.stateMachine.transition("pause" /* PAUSE */);
        this.services.timerRegistry.remove(this.heartbeatInterval);
        if (this.endpoint) {
            this.endpoint.close();
        }
    }
    resume(callback) {
        this.stateMachine.transition("resume" /* RESUME */);
        this.resumeCallback = callback;
        this.tryReconnect();
    }
    /**
     * Forces a new connection and does not wait for the current socket to close.
     * On OSX and iOS it happens that the current socket is dead but looks alive.
     * Calling forceReconnect will regardles of current state reset and set up a
     * new connection
     */
    forceReconnect() {
        if (this.endpoint) {
            this.endpoint.onopen = null;
            this.endpoint.onerror = null;
            this.endpoint.onclose = null;
            // tslint:disable-next-line
            this.endpoint.onparsedmessages = (messages) => { };
        }
        utils.tryWrap(() => this.clearReconnect(), this.services.logger.E);
        utils.tryWrap(() => this.close(), this.services.logger.E);
        this.stateMachine.resetToInitialState();
        this.stateMachine.transition("initialised" /* INITIALISED */);
        this.isInLimbo = true;
        this.firstOpen = true;
        this.isReconnecting = false;
        this.createEndpoint();
    }
    isOpen() {
        const connState = this.getConnectionState();
        return connState !== CONNECTION_STATE.CLOSED
            && connState !== CONNECTION_STATE.ERROR
            && connState !== CONNECTION_STATE.CLOSING;
    }
    /**
     * Creates the endpoint to connect to using the url deepstream
     * was initialised with.
     */
    createEndpoint() {
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
    onOpen() {
        this.clearReconnect();
        this.lastHeartBeat = Date.now();
        this.checkHeartBeat();
        this.stateMachine.transition("connected" /* CONNECTED */);
        this.sendMessage({
            action: CONNECTION_ACTION.CHALLENGE,
            protocolVersion: "0.1a",
            topic: TOPIC.CONNECTION,
            url: this.originalUrl,
        });
        this.stateMachine.transition("challenge" /* CHALLENGE */);
    }
    /**
     * Callback for generic connection errors. Forwards
     * the error to the client.
     *
     * The connection is considered broken once this method has been
     * invoked.
     */
    onError(error) {
        /*
         * If the implementation isn't listening on the error event this will throw
         * an error. So let's defer it to allow the reconnection to kick in.
         */
        setTimeout(() => {
            let msg;
            if (error.code === "ECONNRESET" || error.code === "ECONNREFUSED") {
                msg = `Can't connect! Deepstream server unreachable on ${this.originalUrl}`;
            }
            else {
                try {
                    msg = JSON.stringify(error);
                }
                catch (e) {
                    msg = error.toString();
                }
            }
            this.services.logger.error({ topic: TOPIC.CONNECTION }, EVENT.CONNECTION_ERROR, msg);
        }, 1);
        this.services.timerRegistry.remove(this.heartbeatInterval);
        this.stateMachine.transition("error" /* ERROR */);
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
    onClose() {
        this.services.timerRegistry.remove(this.heartbeatInterval);
        if (this.stateMachine.state === CONNECTION_STATE.REDIRECTING) {
            this.createEndpoint();
            return;
        }
        if (this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED ||
            this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
            this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
            return;
        }
        if (this.stateMachine.state === CONNECTION_STATE.CLOSING) {
            this.stateMachine.transition("closed" /* CLOSED */);
            return;
        }
        if (this.stateMachine.state === CONNECTION_STATE.PAUSING) {
            this.stateMachine.transition("offline" /* OFFLINE */);
            return;
        }
        this.stateMachine.transition("connection-lost" /* LOST */);
        this.tryReconnect();
    }
    /**
     * Callback for messages received on the connection.
     */
    onMessages(parseResults) {
        parseResults.forEach((parseResult) => {
            if (parseResult.parseError) {
                this.services.logger.error({ topic: TOPIC.PARSER }, parseResult.action, parseResult.raw && parseResult.raw.toString());
                return;
            }
            const message = parseResult;
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
    sendAuthParams() {
        this.stateMachine.transition("authenticate" /* AUTHENTICATE */);
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
    checkHeartBeat() {
        const heartBeatTolerance = this.options.heartbeatInterval * 2;
        if (Date.now() - this.lastHeartBeat > heartBeatTolerance) {
            this.services.timerRegistry.remove(this.heartbeatInterval);
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
    tryReconnect() {
        if (this.reconnectTimeout !== null) {
            return;
        }
        if (this.reconnectionAttempt < this.options.maxReconnectAttempts) {
            this.stateMachine.transition("reconnect" /* RECONNECT */);
            this.reconnectTimeout = setTimeout(this.tryOpen.bind(this), Math.min(this.options.maxReconnectInterval, this.options.reconnectIntervalIncrement * this.reconnectionAttempt));
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
    tryOpen() {
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
    clearReconnect() {
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
    handleConnectionResponse(message) {
        if (message.action === CONNECTION_ACTION.PING) {
            this.lastHeartBeat = Date.now();
            if (this.getConnectionState() !== CONNECTION_STATE.CLOSING &&
                this.getConnectionState() !== CONNECTION_STATE.PAUSING) {
                this.sendMessage({ topic: TOPIC.CONNECTION, action: CONNECTION_ACTION.PONG });
            }
            return;
        }
        if (message.action === CONNECTION_ACTION.ACCEPT) {
            this.stateMachine.transition("accepted" /* CHALLENGE_ACCEPTED */);
            return;
        }
        if (message.action === CONNECTION_ACTION.REJECT) {
            this.stateMachine.transition("challenge-denied" /* CHALLENGE_DENIED */);
            if (this.endpoint) {
                this.endpoint.close();
            }
            return;
        }
        if (message.action === CONNECTION_ACTION.REDIRECT) {
            this.url = message.url;
            this.stateMachine.transition("redirected" /* CONNECTION_REDIRECTED */);
            if (this.endpoint) {
                this.endpoint.close();
            }
            return;
        }
        if (message.action === CONNECTION_ACTION.AUTHENTICATION_TIMEOUT) {
            this.stateMachine.transition("authentication-timeout" /* AUTHENTICATION_TIMEOUT */);
            this.services.logger.error(message);
        }
    }
    /**
     * Callback for messages received for the AUTH topic. If
     * the authentication was successful this method will
     * open the connection and send all messages that the client
     * tried to send so far.
     */
    handleAuthResponse(message) {
        if (message.action === AUTH_ACTION.TOO_MANY_AUTH_ATTEMPTS) {
            this.stateMachine.transition("too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */);
            this.services.logger.error(message);
            return;
        }
        if (message.action === AUTH_ACTION.AUTH_UNSUCCESSFUL) {
            this.stateMachine.transition("unsuccesful-login" /* UNSUCCESFUL_LOGIN */);
            this.onAuthUnSuccessful();
            return;
        }
        if (message.action === AUTH_ACTION.AUTH_SUCCESSFUL) {
            this.stateMachine.transition("succesful-login" /* SUCCESFUL_LOGIN */);
            this.onAuthSuccessful(message.parsedData);
            return;
        }
    }
    onAwaitingAuthentication() {
        if (this.authParams) {
            this.sendAuthParams();
        }
    }
    onAuthSuccessful(clientData) {
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
    onAuthUnSuccessful() {
        // this is super ugly but we need a way to try again when the servers is not up
        // and normal reconnect is not working for scenarios like this (yet)
        clearTimeout(this.authUnsuccessfulReconnectTimeout);
        const { maxReconnectInterval } = this.options;
        const cb = () => this.sendAuthParams();
        this.authUnsuccessfulReconnectTimeout = setTimeout(cb, maxReconnectInterval);
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
    updateClientData(data) {
        const newClientData = data || null;
        if (this.clientData === null &&
            (newClientData === null || Object.keys(newClientData).length === 0)) {
            return;
        }
        if (!utils.deepEquals(this.clientData, data)) {
            this.emitter.emit(EVENT.CLIENT_DATA_CHANGED, Object.assign({}, newClientData));
            this.clientData = newClientData;
        }
    }
}
//# sourceMappingURL=connection.js.map