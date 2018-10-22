import { Services } from '../client';
import { Options } from '../client-options';
import { RecordMessage, RecordWriteMessage } from '../../binary-protocol/src/message-constants';
import { RecordServices } from './record-handler';
import * as Emitter from 'component-emitter2';
import * as utils from '../util/utils';
import { Record } from './record';
import { AnonymousRecord } from './anonymous-record';
import { List } from './list';
import { MergeStrategy } from './merge-strategy';
export declare type WriteAckCallback = (error: string | null, recordName: string) => void;
export declare const enum RECORD_STATE {
    INITIAL = 0,
    SUBSCRIBING = 1,
    READY = 2,
    UNSUBSCRIBING = 3,
    UNSUBSCRIBED = 4,
    DELETING = 5,
    DELETED = 6
}
export declare class RecordCore extends Emitter {
    name: string;
    isReady: boolean;
    hasProvider: boolean;
    version: number | null;
    private references;
    private services;
    private options;
    private recordServices;
    private emitter;
    private data;
    private stateMachine;
    private responseTimeout;
    private discardTimeout;
    private deletedTimeout;
    private deleteResponse;
    private whenComplete;
    private pendingWrites;
    constructor(name: string, services: Services, options: Options, recordServices: RecordServices, whenComplete: (recordName: string) => void);
    readonly recordState: RECORD_STATE;
    usages: number;
    /**
     * Convenience method, similar to promises. Executes callback
     * whenever the record is ready, either immediatly or once the ready
     * event is fired
     * @param   {[Function]} callback Will be called when the record is ready
     */
    whenReady(context: null | List | Record | AnonymousRecord, callback?: (context: any) => void): Promise<any> | void;
    /**
     * Sets the value of either the entire dataset
     * or of a specific path within the record
     * and submits the changes to the server
     *
     * If the new data is equal to the current data, nothing will happen
     *
     * @param {[String|Object]} pathOrData Either a JSON path when called with
     *                                     two arguments or the data itself
     * @param {Object} data     The data that should be stored in the record
     */
    set({ path, data, callback }: utils.RecordSetArguments): void;
    /**
     * Wrapper function around the record.set that returns a promise
     * if no callback is supplied.
     * @returns {Promise} if a callback is omitted a Promise is returned with the result of the write
     */
    setWithAck(args: utils.RecordSetArguments): Promise<void> | void;
    /**
     * Returns a copy of either the entire dataset of the record
     * or - if called with a path - the value of that path within
     * the record's dataset.
     *
     * Returning a copy rather than the actual value helps to prevent
     * the record getting out of sync due to unintentional changes to
     * its data
     */
    get(path?: string): any;
    /**
     * Subscribes to changes to the records dataset.
     *
     * Callback is the only mandatory argument.
     *
     * When called with a path, it will only subscribe to updates
     * to that path, rather than the entire record
     *
     * If called with true for triggerNow, the callback will
     * be called immediatly with the current value
     */
    subscribe(args: utils.RecordSubscribeArguments): void;
    /**
     * Removes a subscription that was previously made using record.subscribe()
     *
     * Can be called with a path to remove the callback for this specific
     * path or only with a callback which removes it from the generic subscriptions
     *
     * Please Note: unsubscribe is a purely client side operation. If the app is no longer
     * interested in receiving updates for this record from the server it needs to call
     * discard instead
     *
     * @param   {String}           path  A JSON path
     * @param   {Function}         callback     The callback method. Please note, if a bound
     *                                          method was passed to subscribe, the same method
     *                                          must be passed to unsubscribe as well.
     */
    unsubscribe(args: utils.RecordSubscribeArguments): void;
    /**
     * Removes all change listeners and notifies the server that the client is
     * no longer interested in updates for this record
     */
    discard(): void;
    /**
     * Deletes the record on the server.
     */
    delete(callback?: (error: string | null) => void): Promise<void> | void;
    /**
     * Set a merge strategy to resolve any merge conflicts that may occur due to
     * write conflicts. The function will be called with the local record, the
     * remote version/data and a callback to call once the merge has completed or
     * if an error occurs ( which leaves it in an inconsistent state until the
     * next update merge attempt ).
     */
    setMergeStrategy(mergeStrategy: MergeStrategy): void;
    saveRecordLocally(): void;
    /**
     * Transition States
     */
    private onSubscribing;
    private onReady;
    private applyPendingWrites;
    private onUnsubscribed;
    private onDeleted;
    private handleAckMessage;
    private handleUpdateMessage;
    private handleDeleteSuccess;
    private handleDeleted;
    private handleMessageDenied;
    private handleChangedProvider;
    handle(message: RecordMessage): void;
    private handleReadResponse;
    private sendUpdate;
    /**
     * Applies incoming updates and patches to the record's dataset
     */
    applyUpdate(message: RecordWriteMessage): void;
    /**
     * Compares the new values for every path with the previously stored ones and
     * updates the subscribers if the value has changed
     */
    private applyChange;
    /**
     * If connected sends the delete message to server, otherwise
     * we delete in local storage and transition to delete success.
     */
    private sendDelete;
    /**
     * Destroys the record and nulls all
     * its dependencies
     */
    private destroy;
    private onConnectionLost;
}
