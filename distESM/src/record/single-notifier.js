import { TOPIC } from "../../binary-protocol/src/message-constants";
import { EVENT } from "../constants";
/**
 * Provides a scaffold for subscriptionless requests to deepstream, such as the SNAPSHOT
 * and HAS functionality. The SingleNotifier multiplexes all the client requests so
 * that they can can be notified at once, and also includes reconnection funcionality
 * incase the connection drops.
 *
 * @param {IServices} services          The deepstream client
 * @param {Options} options     Function to call to allow resubscribing
 *
 * @constructor
 */
export class SingleNotifier {
    constructor(services, action, timeoutDuration) {
        this.services = services;
        this.action = action;
        this.requests = new Map();
        this.internalRequests = new Map();
        this.limboQueue = [];
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
     * Add a request. If one has already been made it will skip the server request
     * and multiplex the response
     *
     * @param {String} name An identifier for the request, e.g. a record name
     * @param {Object} response An object with property `callback` or `resolve` and `reject`
     *
     * @public
     * @returns {void}
     */
    request(name, callback) {
        const message = {
            action: this.action,
            name,
            topic: TOPIC.RECORD,
        };
        const req = this.requests.get(name);
        if (req) {
            req.push(callback);
            return;
        }
        this.requests.set(name, [callback]);
        if (this.services.connection.isConnected) {
            this.services.connection.sendMessage(message);
            this.services.timeoutRegistry.add({ message });
        }
        else if (this.services.connection.isInLimbo) {
            this.limboQueue.push(message);
        }
        else {
            callback(EVENT.CLIENT_OFFLINE);
        }
    }
    /**
     * Adds a callback to a (possibly) inflight request that will be called
     * on the response.
     *
     * @param name
     * @param response
     */
    register(name, callback) {
        const request = this.internalRequests.get(name);
        if (!request) {
            this.internalRequests.set(name, [callback]);
        }
        else {
            request.push(callback);
        }
    }
    recieve(message, error, data) {
        this.services.timeoutRegistry.remove(message);
        const name = message.name;
        const responses = this.requests.get(name) || [];
        const internalResponses = this.internalRequests.get(name) || [];
        if (!responses && !internalResponses) {
            return;
        }
        for (const internalResponse of internalResponses) {
            internalResponse(message);
        }
        this.internalRequests.delete(name);
        // todo we can clean this up and do cb = (error, data) => error ? reject(error) : resolve()
        for (const response of responses) {
            response(error, data);
        }
        this.requests.delete(name);
        return;
    }
    // tslint:disable-next-line
    onConnectionLost() { }
    onExitLimbo() {
        for (const message of this.limboQueue) {
            const requests = this.requests.get(message.name);
            if (requests) {
                requests.forEach((cb) => cb(EVENT.CLIENT_OFFLINE));
            }
        }
        this.requests.clear();
        this.limboQueue = [];
    }
    onConnectionReestablished() {
        for (const message of this.limboQueue) {
            this.services.connection.sendMessage(message);
            this.services.timeoutRegistry.add({ message });
        }
    }
}
//# sourceMappingURL=single-notifier.js.map