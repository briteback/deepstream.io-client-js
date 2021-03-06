import * as EventEmitter from "component-emitter2";
import { DefaultOptions } from "./client-options";
import { Connection } from "./connection/connection";
import { EventHandler } from "./event/event-handler";
import { PresenceHandler } from "./presence/presence-handler";
import { RecordHandler } from "./record/record-handler";
import { RPCHandler } from "./rpc/rpc-handler";
import { Logger } from "./util/logger";
import { TimeoutRegistry } from "./util/timeout-registry";
import { TimerRegistry } from "./util/timer-registry";
export class Client extends EventEmitter {
    constructor(url, options = {}) {
        super();
        this.options = Object.assign({}, DefaultOptions, options);
        const services = {};
        services.logger = new Logger(this);
        services.timerRegistry = new TimerRegistry();
        services.timeoutRegistry = new TimeoutRegistry(services, this.options);
        services.connection = new Connection(services, this.options, url, this);
        services.emitter = this;
        this.services = services;
        this.services.connection.onLost(services.timeoutRegistry.onConnectionLost.bind(services.timeoutRegistry));
        this.event = new EventHandler(this.services, this.options);
        this.rpc = new RPCHandler(this.services, this.options);
        this.record = new RecordHandler(this.services, this.options);
        this.presence = new PresenceHandler(this.services, this.options);
    }
    login(detailsOrCallback, callback) {
        if (detailsOrCallback && typeof detailsOrCallback === "object") {
            if (callback) {
                this.services.connection.authenticate(detailsOrCallback, callback);
            }
            else {
                return new Promise((resolve, reject) => {
                    this.services.connection.authenticate(detailsOrCallback, (success, data) => {
                        success ? resolve(data) : reject(data);
                    });
                });
            }
        }
        else {
            if (typeof detailsOrCallback === "function") {
                this.services.connection.authenticate({}, detailsOrCallback);
            }
            else {
                return new Promise((resolve, reject) => {
                    this.services.connection.authenticate({}, (success, data) => {
                        success ? resolve(data) : reject(data);
                    });
                });
            }
        }
    }
    getConnectionState() {
        return this.services.connection.getConnectionState();
    }
    close() {
        this.services.connection.close();
    }
    pause() {
        this.services.connection.pause();
    }
    reconnect() {
        this.services.connection.forceReconnect();
    }
    resume(callback) {
        if (callback) {
            this.services.connection.resume(callback);
            return;
        }
        return new Promise((resolve, reject) => {
            this.services.connection.resume((error) => {
                error ? reject(error) : resolve();
            });
        });
    }
    /**
     * Returns a random string. The first block of characters
     * is a timestamp, in order to allow databases to optimize for semi-
     * sequentuel numberings
     */
    getUid() {
        const timestamp = (new Date()).getTime().toString(36);
        const randomString = (Math.random() * 10000000000000000).toString(36).replace(".", "");
        return `${timestamp}-${randomString}`;
    }
}
//# sourceMappingURL=client.js.map