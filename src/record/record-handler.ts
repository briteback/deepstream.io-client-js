import { RECORD_ACTIONS as RECORD_ACTION, RecordMessage, TOPIC } from "../../binary-protocol/src/message-constants";
import { isWriteAck } from "../../binary-protocol/src/utils";
import { IServices } from "../client";
import { IOptions } from "../client-options";
import { EVENT } from "../constants";
import { ListenCallback, Listener } from "../util/listener";
import * as utils from "../util/utils";
import { AnonymousRecord } from "./anonymous-record";
import { List } from "./list";
import { MergeStrategy } from "./merge-strategy";
import { MergeStrategyService } from "./merge-strategy-service";
import { Record } from "./record";
import { RecordCore, WriteAckCallback } from "./record-core";
import { SingleNotifier } from "./single-notifier";
import { WriteAcknowledgementService } from "./write-ack-service";

export interface IRecordServices {
  writeAckService: WriteAcknowledgementService;
  readRegistry: SingleNotifier;
  headRegistry: SingleNotifier;
  mergeStrategy: MergeStrategyService;
}

export class RecordHandler {
  private services: IServices;
  private options: IOptions;
  private listener: Listener;
  private recordCores: Map<string, RecordCore>;
  private recordServices: IRecordServices;

  constructor(services: IServices, options: IOptions, recordServices?: IRecordServices, listener?: Listener) {
    this.services = services;
    this.options = options;
    this.listener = listener || new Listener(TOPIC.RECORD, this.services);

    this.recordCores = new Map();

    this.recordServices = recordServices || {
      headRegistry: new SingleNotifier(services, RECORD_ACTION.HEAD, options.recordReadTimeout),
      mergeStrategy: new MergeStrategyService(services, options.mergeStrategy),
      readRegistry: new SingleNotifier(services, RECORD_ACTION.READ, options.recordReadTimeout),
      writeAckService: new WriteAcknowledgementService(services),
    } as IRecordServices;

    this.getRecordCore = this.getRecordCore.bind(this);
    this.services.connection.registerHandler(TOPIC.RECORD, this.handle.bind(this));
  }

  public setMergeStrategy(recordName: string, mergeStrategy: MergeStrategy): void {
    if (typeof mergeStrategy === "function") {
      this.recordServices.mergeStrategy.setMergeStrategyByName(recordName, mergeStrategy);
    } else {
      throw new Error("Invalid merge strategy: Must be a Function");
    }
  }

  public setMergeStrategyRegExp(regexp: RegExp, mergeStrategy: MergeStrategy): void {
    if (typeof mergeStrategy === "function") {
      this.recordServices.mergeStrategy.setMergeStrategyByPattern(regexp, mergeStrategy);
    } else {
      throw new Error("Invalid merge strategy: Must be a Function");
    }
  }

  /**
   * Returns an existing record or creates a new one.
   *
   * @param   {String} name              the unique name of the record
   */
  public getRecord(name: string): Record {
    return new Record(this.getRecordCore(name));
  }

  /**
   * Returns an existing List or creates a new one. A list is a specialised
   * type of record that holds an array of recordNames.
   *
   * @param   {String} name       the unique name of the list
   */
  public getList(name: string): List {
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
  public getAnonymousRecord(): AnonymousRecord {
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
  public listen(pattern: string, callback: ListenCallback): void {
    this.listener.listen(pattern, callback);
  }

  /**
   * Removes a listener that was previously registered with listenForSubscriptions
   *
   * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
   */
  public unlisten(pattern: string): void {
    this.listener.unlisten(pattern);
  }

  /**
   * Retrieve the current record data without subscribing to changes
   *
   * @param   {String}  name the unique name of the record
   * @param   {Function}  callback
   */
  public snapshot(name: string): Promise<any>;
  public snapshot(name: string, callback: (error: string | null, data: any) => void): void;
  public snapshot(name: string, callback?: (error: string | null, data: any) => void): void | Promise<any> {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("invalid argument: name");
    }
    if (callback !== undefined && typeof callback !== "function") {
      throw new Error("invalid argument: callback");
    }

    const recordCore = this.recordCores.get(name);
    if (recordCore && recordCore.isRecordReady()) {
      if (callback) {
        return callback(null, recordCore.get());
      } else {
        return Promise.resolve(recordCore.get());
      }
    }

    if (callback) {
      this.recordServices.readRegistry.request(name, callback);
    } else {
      return new Promise((resolve, reject) => {
        const cb = (err: any, data: any) => err ? reject(err) : resolve(data);
        this.recordServices.readRegistry.request(name, cb);
      });
    }
  }

  /**
   * Allows the user to query to see whether or not the record exists.
   *
   * @param   {String}  name the unique name of the record
   * @param   {Function}  callback
   */
  public has(name: string): Promise<boolean>;
  public has(name: string, callback: (error: string | null, has: boolean | null) => void): void;
  public has(name: string, callback?: (error: string | null, has: boolean | null) => void): Promise<boolean> | void {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("invalid argument: name");
    }
    if (callback !== undefined && typeof callback !== "function") {
      throw new Error("invalid argument: callback");
    }

    let cb;
    if (!callback) {
      return new Promise((resolve, reject) => {
        cb = (error: string | null, version: number) => error ? reject(error) : resolve(version !== -1);
        this.head(name, cb);
      });
    }
    cb = (error: string | null, version: number) => error ?
      callback(error, null) : callback(null, version !== -1);
    this.head(name, cb);
  }

  /**
   * Allows the user to query for the version number of a record.
   *
   * @param   {String}  name the unique name of the record
   * @param   {Function}  callback
   */
  public head(name: string): Promise<number>;
  public head(name: string, callback: (error: string | null, version: number) => void): void;
  public head(name: string, callback?: (error: string | null, version: number) => void): void | Promise<number> {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("invalid argument: name");
    }
    if (callback !== undefined && typeof callback !== "function") {
      throw new Error("invalid argument: callback");
    }

    const recordCore = this.recordCores.get(name);
    if (recordCore && recordCore.isRecordReady()) {
      if (callback) {
        return callback(null, recordCore.version as number);
      } else {
        return Promise.resolve(recordCore.version as number);
      }
    }

    if (callback) {
      this.recordServices.headRegistry.request(name, callback);
    } else {
      return new Promise((resolve, reject) => {
        this.recordServices.headRegistry.request(name, (error, data) => error ? reject(error) : resolve(data));
      });
    }
  }

  /**
   * A wrapper function around setData. The function works exactly
   * the same however when a callback is omitted a Promise will be
   * returned.
   *
   * @param {String}          recordName     the name of the record to set
   * @param {String|Object}   pathOrData     the path to set or the data to write
   * @param {Object|Function} dataOrCallback the data to write or the write acknowledgement
   *                                         callback
   * @param {Function}        callback       the callback that will be called with the result
   *                                         of the write
   * @returns {Promise} if a callback is omitted a Promise will be returned that resolves
   *                    with the result of the write
   */
  public setDataWithAck(recordName: string, data: any, callback?: WriteAckCallback): Promise<string> | void;
  public setDataWithAck(recordName: string, path: string,
                        data: any, callback?: WriteAckCallback): Promise<string> | void;
  public setDataWithAck(recordName: string, ...rest: any[]): Promise<string> | void {
    const args = utils.normalizeSetArguments(arguments, 1);
    if (!args.callback) {
      return new Promise((resolve, reject) => {
        args.callback = (error) => error === null ? resolve() : reject(error);
        this.sendSetData(recordName, -1, args);
      });
    }
    this.sendSetData(recordName, -1, args);
  }

  /**
   * Allows setting the data for a record without being subscribed to it. If
   * the client is subscribed to the record locally, the update will be proxied
   * through the record object like a normal call to Record.set. Otherwise a force
   * write will be performed that overwrites any remote data.
   *
   * @param {String} recordName the name of the record to write to
   * @param {String|Object} pathOrData either the path to write data to or the data to
   *                                   set the record to
   * @param {Object|Primitive|Function} dataOrCallback either the data to write to the
   *                                                   record or a callback function
   *                                                   indicating write success
   * @param {Function} callback if provided this will be called with the result of the
   *                            write
   */
  public setData(recordName: string, data: any): void;
  public setData(recordName: string, path: string, data: any, callback: WriteAckCallback): void;
  public setData(recordName: string, pathOrData: string | any,
                 dataOrCallback: any | WriteAckCallback, callback?: WriteAckCallback): void;
  public setData(recordName: string): void {
    const args = utils.normalizeSetArguments(arguments, 1);
    this.sendSetData(recordName, -1, args);
  }

  private sendSetData(recordName: string, version: number, args: utils.IRecordSetArguments): void {
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
      } else if (data === undefined) {
        return RECORD_ACTION.ERASE;
      } else {
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
    } else {
      this.services.connection.sendMessage(message);
    }
  }

  /**
   * Will be called by the client for incoming messages on the RECORD topic
   *
   * @param   {Object} message parsed and validated deepstream message
   */
  private handle(message: RecordMessage) {
    if (
      message.action === RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_FOUND ||
      message.action === RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_REMOVED ||
      message.action === RECORD_ACTION.LISTEN ||
      message.action === RECORD_ACTION.UNLISTEN
    ) {
      this.listener.handle(message);
      return;
    }

    if (isWriteAck(message.action) || isWriteAck(message.originalAction as RECORD_ACTION)) {
      this.recordServices.writeAckService.recieve(message);
      return;
    }

    if (message.action === RECORD_ACTION.READ_RESPONSE || message.originalAction === RECORD_ACTION.READ) {
      if (message.isError) {
        this.recordServices.readRegistry.recieve(message, RECORD_ACTION[message.action]);
      } else {
        this.recordServices.readRegistry.recieve(message, null, message.parsedData);
      }
      return;
    }

    if (
      message.action === RECORD_ACTION.HEAD_RESPONSE ||
      message.originalAction === RECORD_ACTION.HEAD
    ) {
      if (message.isError) {
        this.recordServices.headRegistry.recieve(message, RECORD_ACTION[message.action]);
      } else {
        this.recordServices.headRegistry.recieve(message, null, message.version);
      }
    }

    const recordCore = this.recordCores.get(message.name);
    if (recordCore) {
      recordCore.handle(message);
      return;
    }

    if (
      message.action === RECORD_ACTION.VERSION_EXISTS
    ) {
      return;
    }

    if (
      message.action === RECORD_ACTION.SUBSCRIPTION_HAS_PROVIDER ||
      message.action === RECORD_ACTION.SUBSCRIPTION_HAS_NO_PROVIDER
    ) {
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
  private removeRecord(recordName: string) {
    this.recordCores.delete(recordName);
  }

  private getRecordCore(recordName: string): RecordCore {
    let recordCore = this.recordCores.get(recordName);
    if (!recordCore) {
      recordCore = new RecordCore(
        recordName,
        this.services,
        this.options,
        this.recordServices,
        this.removeRecord.bind(this),
      );
      this.recordCores.set(recordName, recordCore);
    } else {
      recordCore.usages++;
    }
    return recordCore;
  }

}
