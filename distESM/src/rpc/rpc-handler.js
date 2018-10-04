import { TOPIC, RPC_ACTIONS as RPC_ACTION } from '../../binary-protocol/src/message-constants';
import { EVENT } from '../constants';
import { RPC } from '../rpc/rpc';
import { RPCResponse } from '../rpc/rpc-response';
import { getUid } from '../util/utils';
export class RPCHandler {
    constructor(services, options) {
        this.services = services;
        this.options = options;
        this.rpcs = new Map();
        this.providers = new Map();
        this.limboQueue = [];
        this.services.connection.registerHandler(TOPIC.RPC, this.handle.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Registers a callback function as a RPC provider. If another connected client calls
     * client.rpc.make() the request will be routed to this method
     *
     * The callback will be invoked with two arguments:
     *     {Mixed} data The data passed to the client.rpc.make function
     *     {RpcResponse} rpcResponse An object with methods to response,
     *                               acknowledge or reject the request
     *
     * Only one callback can be registered for a RPC at a time
     *
     * Please note: Deepstream tries to deliver data in its original format.
     * Data passed to client.rpc.make as a String will arrive as a String,
     * numbers or implicitly JSON serialized objects will arrive in their
     * respective format as well
     */
    provide(name, callback) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (this.providers.has(name)) {
            throw new Error(`RPC ${name} already registered`);
        }
        if (typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        this.providers.set(name, callback);
        if (this.services.connection.isConnected) {
            this.sendProvide(name);
        }
    }
    /**
     * Unregisters this client as a provider for a remote procedure call
     */
    unprovide(name) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (!this.providers.has(name)) {
            this.services.logger.warn({
                topic: TOPIC.RPC,
                action: RPC_ACTION.NOT_PROVIDED,
                name
            });
            return;
        }
        this.providers.delete(name);
        if (this.services.connection.isConnected) {
            const message = { topic: TOPIC.RPC, action: RPC_ACTION.UNPROVIDE, name };
            this.services.timeoutRegistry.add({ message });
            this.services.connection.sendMessage(message);
            return;
        }
    }
    make(name, data, callback) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (callback && typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        const correlationId = getUid();
        if (this.services.connection.isConnected) {
            if (callback) {
                this.rpcs.set(correlationId, new RPC(name, correlationId, data, callback, this.options, this.services));
                return;
            }
            return new Promise((resolve, reject) => {
                this.rpcs.set(correlationId, new RPC(name, correlationId, data, (error, result) => error ? reject(error) : resolve(result), this.options, this.services));
            });
        }
        else if (this.services.connection.isInLimbo) {
            if (callback) {
                this.limboQueue.push({ correlationId, name, data, callback });
            }
            else {
                return new Promise((resolve, reject) => {
                    this.limboQueue.push({ correlationId, name, data, callback: (error, result) => error ? reject(error) : resolve(result) });
                });
            }
        }
        else {
            if (callback) {
                callback(EVENT.CLIENT_OFFLINE);
            }
            else {
                return Promise.reject(EVENT.CLIENT_OFFLINE);
            }
        }
    }
    /**
     * Handles incoming rpc REQUEST messages. Instantiates a new response object
     * and invokes the provider callback or rejects the request if no rpc provider
     * is present (which shouldn't really happen, but might be the result of a race condition
     * if this client sends a unprovide message whilst an incoming request is already in flight)
     */
    respondToRpc(message) {
        const provider = this.providers.get(message.name);
        if (provider) {
            if (this.options.messageRewriter) {
                this.options.messageRewriter(message);
            }
            provider(message.parsedData, new RPCResponse(message, this.options, this.services));
        }
        else {
            this.services.connection.sendMessage({
                topic: TOPIC.RPC,
                action: RPC_ACTION.REJECT,
                name: message.name,
                correlationId: message.correlationId
            });
        }
    }
    /**
     * Distributes incoming messages from the server
     * based on their action
     */
    handle(message) {
        // RPC Requests
        if (message.action === RPC_ACTION.REQUEST) {
            this.respondToRpc(message);
            return;
        }
        // RPC subscription Acks
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        // handle auth/denied subscription errors
        if (message.action === RPC_ACTION.MESSAGE_PERMISSION_ERROR || message.action === RPC_ACTION.MESSAGE_DENIED) {
            if (message.originalAction === RPC_ACTION.PROVIDE || message.originalAction === RPC_ACTION.UNPROVIDE) {
                this.services.timeoutRegistry.remove(message);
                this.providers.delete(message.name);
                this.services.logger.error(message);
                return;
            }
            if (message.originalAction === RPC_ACTION.REQUEST) {
                const invalidRPC = this.getRPC(message);
                if (invalidRPC) {
                    invalidRPC.error(RPC_ACTION[message.action]);
                    this.rpcs.delete(message.correlationId);
                    return;
                }
            }
        }
        // RPC Responses
        const rpc = this.getRPC(message);
        if (rpc) {
            if (message.action === RPC_ACTION.ACCEPT) {
                rpc.accept();
                return;
            }
            if (message.action === RPC_ACTION.RESPONSE) {
                rpc.respond(message.parsedData);
            }
            else if (message.action === RPC_ACTION.REQUEST_ERROR) {
                rpc.error(message.parsedData);
            }
            else if (message.action === RPC_ACTION.RESPONSE_TIMEOUT ||
                message.action === RPC_ACTION.NO_RPC_PROVIDER) {
                rpc.error(RPC_ACTION[message.action]);
            }
            this.rpcs.delete(message.correlationId);
        }
    }
    getRPC(message) {
        const rpc = this.rpcs.get(message.correlationId);
        if (rpc === undefined) {
            this.services.logger.error(message, EVENT.UNKNOWN_CORRELATION_ID);
        }
        return rpc;
    }
    sendProvide(name) {
        const message = {
            topic: TOPIC.RPC,
            action: RPC_ACTION.PROVIDE,
            name
        };
        this.services.timeoutRegistry.add({ message });
        this.services.connection.sendMessage(message);
    }
    onConnectionReestablished() {
        for (const [name] of this.providers) {
            this.sendProvide(name);
        }
        for (let i = 0; i < this.limboQueue.length; i++) {
            const { correlationId, name, data, callback } = this.limboQueue[i];
            this.rpcs.set(correlationId, new RPC(name, correlationId, data, callback, this.options, this.services));
        }
        this.limboQueue = [];
    }
    onExitLimbo() {
        for (let i = 0; i < this.limboQueue.length; i++) {
            this.limboQueue[i].callback(EVENT.CLIENT_OFFLINE);
        }
        this.limboQueue = [];
    }
    onConnectionLost() {
        this.rpcs.forEach(rpc => {
            rpc.error(EVENT.CLIENT_OFFLINE);
        });
        this.rpcs.clear();
    }
}
//# sourceMappingURL=rpc-handler.js.map