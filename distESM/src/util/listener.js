import { TOPIC, EVENT_ACTIONS, RECORD_ACTIONS } from '../../binary-protocol/src/message-constants';
import { EVENT } from '../../src/constants';
export class Listener {
    constructor(topic, services) {
        this.topic = topic;
        this.services = services;
        this.listeners = new Map();
        this.stopCallbacks = new Map();
        if (topic === TOPIC.RECORD) {
            this.actions = RECORD_ACTIONS;
        }
        else if (topic === TOPIC.EVENT) {
            this.actions = EVENT_ACTIONS;
        }
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    listen(pattern, callback) {
        if (typeof pattern !== 'string' || pattern.length === 0) {
            throw new Error('invalid argument pattern');
        }
        if (typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (this.listeners.has(pattern)) {
            this.services.logger.warn({
                topic: this.topic,
                action: EVENT.LISTENER_EXISTS,
                name: pattern
            });
            return;
        }
        this.listeners.set(pattern, callback);
        this.sendListen(pattern);
    }
    unlisten(pattern) {
        if (typeof pattern !== 'string' || pattern.length === 0) {
            throw new Error('invalid argument pattern');
        }
        if (!this.listeners.has(pattern)) {
            this.services.logger.warn({
                topic: this.topic,
                action: EVENT.NOT_LISTENING,
                name: pattern
            });
            return;
        }
        this.listeners.delete(pattern);
        this.sendUnlisten(pattern);
    }
    /*
   * Accepting a listener request informs deepstream that the current provider is willing to
   * provide the record or event matching the subscriptionName . This will establish the current
   * provider as the only publisher for the actual subscription with the deepstream cluster.
   * Either accept or reject needs to be called by the listener
   */
    accept(pattern, subscription) {
        this.services.connection.sendMessage({
            topic: this.topic,
            action: this.actions.LISTEN_ACCEPT,
            name: pattern,
            subscription
        });
    }
    /*
    * Rejecting a listener request informs deepstream that the current provider is not willing
    * to provide the record or event matching the subscriptionName . This will result in deepstream
    * requesting another provider to do so instead. If no other provider accepts or exists, the
    * resource will remain unprovided.
    * Either accept or reject needs to be called by the listener
    */
    reject(pattern, subscription) {
        this.services.connection.sendMessage({
            topic: this.topic,
            action: this.actions.LISTEN_REJECT,
            name: pattern,
            subscription
        });
    }
    stop(subscription, callback) {
        this.stopCallbacks.set(subscription, callback);
    }
    handle(message) {
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_FOUND) {
            const listener = this.listeners.get(message.name);
            if (listener) {
                listener(message.subscription, {
                    accept: this.accept.bind(this, message.name, message.subscription),
                    reject: this.reject.bind(this, message.name, message.subscription),
                    onStop: this.stop.bind(this, message.subscription)
                });
            }
            return;
        }
        if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
            const stopCallback = this.stopCallbacks.get(message.subscription);
            if (stopCallback) {
                stopCallback(message.subscription);
                this.stopCallbacks.delete(message.subscription);
            }
            return;
        }
        this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
    }
    onConnectionLost() {
        this.stopCallbacks.forEach((callback, subscription) => {
            callback(subscription);
        });
        this.stopCallbacks.clear();
    }
    onConnectionReestablished() {
        this.listeners.forEach((callback, pattern) => {
            this.sendListen(pattern);
        });
    }
    /*
    * Sends a C.ACTIONS.LISTEN to deepstream.
    */
    sendListen(pattern) {
        const message = {
            topic: this.topic,
            action: this.actions.LISTEN,
            name: pattern
        };
        this.services.timeoutRegistry.add({ message });
        this.services.connection.sendMessage(message);
    }
    sendUnlisten(pattern) {
        const message = {
            topic: this.topic,
            action: this.actions.UNLISTEN,
            name: pattern
        };
        this.services.timeoutRegistry.add({ message });
        this.services.connection.sendMessage(message);
    }
}
//# sourceMappingURL=listener.js.map