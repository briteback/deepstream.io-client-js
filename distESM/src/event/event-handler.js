import * as Emitter from "component-emitter2";
import { EVENT_ACTIONS as EVENT_ACTION, TOPIC } from "../../binary-protocol/src/message-constants";
import { EVENT } from "../constants";
import { Listener } from "../util/listener";
export class EventHandler {
    constructor(services, options, listeners) {
        this.services = services;
        this.listeners = listeners || new Listener(TOPIC.EVENT, services);
        this.emitter = new Emitter();
        this.limboQueue = [];
        this.services.connection.registerHandler(TOPIC.EVENT, this.handle.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
     * Subscribe to an event. This will receive both locally emitted events
     * as well as events emitted by other connected clients.
     */
    subscribe(name, callback) {
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument name");
        }
        if (typeof callback !== "function") {
            throw new Error("invalid argument callback");
        }
        if (!this.emitter.hasListeners(name)) {
            if (this.services.connection.isConnected) {
                this.sendSubscriptionMessage(name);
            }
        }
        this.emitter.on(name, callback);
    }
    /**
     * Removes a callback for a specified event. If all callbacks
     * for an event have been removed, the server will be notified
     * that the client is unsubscribed as a listener
     */
    unsubscribe(name, callback) {
        if (!name || typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument name");
        }
        if (callback !== undefined && typeof callback !== "function") {
            throw new Error("invalid argument callback");
        }
        if (!this.emitter.hasListeners(name)) {
            this.services.logger.warn({
                action: EVENT_ACTION.NOT_SUBSCRIBED,
                name,
                topic: TOPIC.EVENT,
            });
            return;
        }
        this.emitter.off(name, callback);
        if (!this.emitter.hasListeners(name)) {
            const message = {
                action: EVENT_ACTION.UNSUBSCRIBE,
                name,
                topic: TOPIC.EVENT,
            };
            this.services.timeoutRegistry.add({ message });
            if (this.services.connection.isConnected) {
                this.services.connection.sendMessage(message);
            }
            else if (this.services.connection.isInLimbo) {
                this.limboQueue.push(message);
            }
        }
    }
    /**
     * Emits an event locally and sends a message to the server to
     * broadcast the event to the other connected clients
     */
    emit(name, data) {
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument name");
        }
        const message = {
            action: EVENT_ACTION.EMIT,
            name,
            parsedData: data,
            topic: TOPIC.EVENT,
        };
        if (this.services.connection.isConnected) {
            this.services.connection.sendMessage(message);
        }
        else if (this.services.connection.isInLimbo) {
            this.limboQueue.push(message);
        }
        this.emitter.emit(name, data);
    }
    /**
     * Allows to listen for event subscriptions made by this or other clients. This
     * is useful to create "active" data providers, e.g. providers that only provide
     * data for a particular event if a user is actually interested in it
     */
    listen(pattern, callback) {
        this.listeners.listen(pattern, callback);
    }
    /**
     * Removes a listener that was previously registered
     */
    unlisten(pattern) {
        this.listeners.unlisten(pattern);
    }
    /**
     * Handles incoming messages from the server
     */
    handle(message) {
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === EVENT_ACTION.EMIT) {
            if (message.parsedData !== undefined) {
                this.emitter.emit(message.name, message.parsedData);
            }
            else {
                this.emitter.emit(message.name, undefined);
            }
            return;
        }
        if (message.action === EVENT_ACTION.MESSAGE_DENIED) {
            this.services.logger.error({ topic: TOPIC.EVENT }, EVENT_ACTION.MESSAGE_DENIED);
            this.services.timeoutRegistry.remove(message);
            if (message.originalAction === EVENT_ACTION.SUBSCRIBE) {
                this.emitter.off(message.name);
            }
            return;
        }
        if (message.action === EVENT_ACTION.MULTIPLE_SUBSCRIPTIONS) {
            this.services.timeoutRegistry.remove(Object.assign({}, message, {
                action: EVENT_ACTION.SUBSCRIBE,
            }));
            this.services.logger.warn(message);
            return;
        }
        if (message.action === EVENT_ACTION.NOT_SUBSCRIBED) {
            this.services.timeoutRegistry.remove(Object.assign({}, message, {
                action: EVENT_ACTION.SUBSCRIBE,
            }));
            this.services.logger.warn(message);
            return;
        }
        if (message.action === EVENT_ACTION.SUBSCRIPTION_FOR_PATTERN_FOUND ||
            message.action === EVENT_ACTION.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
            this.listeners.handle(message);
            return;
        }
        if (message.action === EVENT_ACTION.INVALID_LISTEN_REGEX) {
            this.services.logger.error(message);
            return;
        }
        this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
    }
    /**
     * Resubscribes to events when connection is lost
     */
    onConnectionReestablished() {
        const callbacks = this.emitter.eventNames();
        for (const name of callbacks) {
            this.sendSubscriptionMessage(name);
        }
        for (const limboObject of this.limboQueue) {
            this.services.connection.sendMessage(limboObject);
        }
        this.limboQueue = [];
    }
    onExitLimbo() {
        this.limboQueue = [];
    }
    sendSubscriptionMessage(name) {
        const message = {
            action: EVENT_ACTION.SUBSCRIBE,
            name,
            topic: TOPIC.EVENT,
        };
        this.services.timeoutRegistry.add({ message });
        this.services.connection.sendMessage(message);
    }
}
//# sourceMappingURL=event-handler.js.map