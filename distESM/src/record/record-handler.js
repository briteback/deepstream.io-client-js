import { RECORD_ACTIONS as RECORD_ACTION, TOPIC } from "../../binary-protocol/src/message-constants";
import { isWriteAck } from "../../binary-protocol/src/utils";
import { EVENT } from "../constants";
import { Listener } from "../util/listener";
import * as utils from "../util/utils";
import { AnonymousRecord } from "./anonymous-record";
import { List } from "./list";
import { MergeStrategyService } from "./merge-strategy-service";
import { Record } from "./record";
import { RecordCore } from "./record-core";
import { SingleNotifier } from "./single-notifier";
import { WriteAcknowledgementService } from "./write-ack-service";
export class RecordHandler {
    constructor(services, options, recordServices, listener) {
        this.services = services;
        this.options = options;
        this.listener = listener || new Listener(TOPIC.RECORD, this.services);
        this.recordCores = new Map();
        this.recordServices = recordServices || {
            headRegistry: new SingleNotifier(services, RECORD_ACTION.HEAD, options.recordReadTimeout),
            mergeStrategy: new MergeStrategyService(services, options.mergeStrategy),
            readRegistry: new SingleNotifier(services, RECORD_ACTION.READ, options.recordReadTimeout),
            writeAckService: new WriteAcknowledgementService(services),
        };
        this.getRecordCore = this.getRecordCore.bind(this);
        this.services.connection.registerHandler(TOPIC.RECORD, this.handle.bind(this));
    }
    setMergeStrategy(recordName, mergeStrategy) {
        if (typeof mergeStrategy === "function") {
            this.recordServices.mergeStrategy.setMergeStrategyByName(recordName, mergeStrategy);
        }
        else {
            throw new Error("Invalid merge strategy: Must be a Function");
        }
    }
    setMergeStrategyRegExp(regexp, mergeStrategy) {
        if (typeof mergeStrategy === "function") {
            this.recordServices.mergeStrategy.setMergeStrategyByPattern(regexp, mergeStrategy);
        }
        else {
            throw new Error("Invalid merge strategy: Must be a Function");
        }
    }
    /**
     * Returns an existing record or creates a new one.
     *
     * @param   {String} name              the unique name of the record
     */
    getRecord(name) {
        return new Record(this.getRecordCore(name));
    }
    /**
     * Returns an existing List or creates a new one. A list is a specialised
     * type of record that holds an array of recordNames.
     *
     * @param   {String} name       the unique name of the list
     */
    getList(name) {
        return new List(this.getRecordCore(name));
    }
    /**
     * Returns an anonymous record. A anonymous record is effectively
     * a wrapper that mimicks the API of a record, but allows for the
     * underlying record to be swapped without loosing subscriptions etc.
     *
     * This is particularly useful when selecting from a number of similarly
     * structured records. E.g. a list of users that can be choosen from a list
     *
     * The only API difference to a normal record is an additional setName( name ) method.
     */
    getAnonymousRecord() {
        return new AnonymousRecord(this.getRecordCore);
    }
    /**
     * Allows to listen for record subscriptions made by this or other clients. This
     * is useful to create "active" data providers, e.g. providers that only provide
     * data for a particular record if a user is actually interested in it
     *
     * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
     * @param   {Function} callback
     */
    listen(pattern, callback) {
        this.listener.listen(pattern, callback);
    }
    /**
     * Removes a listener that was previously registered with listenForSubscriptions
     *
     * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
     */
    unlisten(pattern) {
        this.listener.unlisten(pattern);
    }
    snapshot(name, callback) {
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument: name");
        }
        if (callback !== undefined && typeof callback !== "function") {
            throw new Error("invalid argument: callback");
        }
        const recordCore = this.recordCores.get(name);
        if (recordCore && callback) {
            return recordCore.whenReady(null, () => {
                callback(null, recordCore.get());
            });
        }
        else if (recordCore && !callback) {
            return new Promise((resolve, reject) => {
                recordCore.whenReady(null, () => {
                    resolve(recordCore.get());
                });
            });
        }
        else if (!recordCore && callback) {
            this.recordServices.readRegistry.request(name, callback);
            return;
        }
        else {
            return new Promise((resolve, reject) => {
                const cb = (err, data) => err ? reject(err) : resolve(data);
                this.recordServices.readRegistry.request(name, cb);
            });
        }
    }
    has(name, callback) {
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument: name");
        }
        if (callback !== undefined && typeof callback !== "function") {
            throw new Error("invalid argument: callback");
        }
        let cb;
        if (!callback) {
            return new Promise((resolve, reject) => {
                cb = (error, version) => error ? reject(error) : resolve(version !== -1);
                this.head(name, cb);
            });
        }
        cb = (error, version) => error ?
            callback(error, null) : callback(null, version !== -1);
        this.head(name, cb);
    }
    head(name, callback) {
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("invalid argument: name");
        }
        if (callback !== undefined && typeof callback !== "function") {
            throw new Error("invalid argument: callback");
        }
        const recordCore = this.recordCores.get(name);
        if (recordCore) {
            if (callback) {
                recordCore.whenReady(null, () => {
                    callback(null, recordCore.version);
                });
            }
            else {
                return new Promise((resolve, reject) => {
                    recordCore.whenReady(null, () => {
                        resolve(recordCore.version);
                    });
                });
            }
            return;
        }
        if (callback) {
            this.recordServices.headRegistry.request(name, callback);
        }
        else {
            return new Promise((resolve, reject) => {
                this.recordServices.headRegistry.request(name, (error, data) => error ? reject(error) : resolve(data));
            });
        }
    }
    setDataWithAck(recordName, ...rest) {
        const args = utils.normalizeSetArguments(arguments, 1);
        if (!args.callback) {
            return new Promise((resolve, reject) => {
                args.callback = (error) => error === null ? resolve() : reject(error);
                this.sendSetData(recordName, -1, args);
            });
        }
        this.sendSetData(recordName, -1, args);
    }
    setData(recordName) {
        const args = utils.normalizeSetArguments(arguments, 1);
        this.sendSetData(recordName, -1, args);
    }
    sendSetData(recordName, version, args) {
        const { path, data, callback } = args;
        if (!recordName || typeof recordName !== "string" || recordName.length === 0) {
            throw new Error("invalid argument: recordName must be an non empty string");
        }
        if (!path && (data === null || typeof data !== "object")) {
            throw new Error("invalid argument: data must be an object when no path is provided");
        }
        const recordCore = this.recordCores.get(recordName);
        if (recordCore) {
            recordCore.set({ path, data, callback });
            return;
        }
        const action = (() => {
            if (!path) {
                return RECORD_ACTION.CREATEANDUPDATE;
            }
            else if (data === undefined) {
                return RECORD_ACTION.ERASE;
            }
            else {
                return RECORD_ACTION.CREATEANDPATCH;
            }
        })();
        const message = {
            action,
            name: recordName,
            parsedData: data,
            path,
            topic: TOPIC.RECORD,
            version,
        };
        if (callback) {
            this.recordServices.writeAckService.send(message, callback);
        }
        else {
            this.services.connection.sendMessage(message);
        }
    }
    /**
     * Will be called by the client for incoming messages on the RECORD topic
     *
     * @param   {Object} message parsed and validated deepstream message
     */
    handle(message) {
        if (message.action === RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_FOUND ||
            message.action === RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_REMOVED ||
            message.action === RECORD_ACTION.LISTEN ||
            message.action === RECORD_ACTION.UNLISTEN) {
            this.listener.handle(message);
            return;
        }
        if (isWriteAck(message.action) || isWriteAck(message.originalAction)) {
            this.recordServices.writeAckService.recieve(message);
            return;
        }
        if (message.action === RECORD_ACTION.READ_RESPONSE || message.originalAction === RECORD_ACTION.READ) {
            if (message.isError) {
                this.recordServices.readRegistry.recieve(message, RECORD_ACTION[message.action]);
            }
            else {
                this.recordServices.readRegistry.recieve(message, null, message.parsedData);
            }
            return;
        }
        if (message.action === RECORD_ACTION.HEAD_RESPONSE ||
            message.originalAction === RECORD_ACTION.HEAD) {
            if (message.isError) {
                this.recordServices.headRegistry.recieve(message, RECORD_ACTION[message.action]);
            }
            else {
                this.recordServices.headRegistry.recieve(message, null, message.version);
            }
        }
        const recordCore = this.recordCores.get(message.name);
        if (recordCore) {
            recordCore.handle(message);
            return;
        }
        if (message.action === RECORD_ACTION.VERSION_EXISTS) {
            return;
        }
        if (message.action === RECORD_ACTION.SUBSCRIPTION_HAS_PROVIDER ||
            message.action === RECORD_ACTION.SUBSCRIPTION_HAS_NO_PROVIDER) {
            // record can receive a HAS_PROVIDER after discarding the record
            return;
        }
        if (message.isError) {
            this.services.logger.error(message);
            return;
        }
        this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
    }
    /**
     * Callback for 'deleted' and 'discard' events from a record. Removes the record from
     * the registry
     */
    removeRecord(recordName) {
        this.recordCores.delete(recordName);
    }
    getRecordCore(recordName) {
        let recordCore = this.recordCores.get(recordName);
        if (!recordCore) {
            recordCore = new RecordCore(recordName, this.services, this.options, this.recordServices, this.removeRecord.bind(this));
            this.recordCores.set(recordName, recordCore);
        }
        else {
            recordCore.usages++;
        }
        return recordCore;
    }
}
//# sourceMappingURL=record-handler.js.map