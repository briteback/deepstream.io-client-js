import { Message, RECORD_ACTIONS as RECORD_ACTION, RPC_ACTIONS as RPC_ACTION } from "../../binary-protocol/src/message-constants";
import { IServices } from "../client";
import { IOptions } from "../client-options";
import { EVENT } from "../constants";
import * as EventEmitter from "component-emitter2";
export interface ITimeout {
    event?: EVENT | RPC_ACTION | RECORD_ACTION;
    message: Message;
    callback?: (event: EVENT | RPC_ACTION | RECORD_ACTION, message: Message) => void;
    duration?: number;
}
/**
 * Subscriptions to events are in a pending state until deepstream acknowledges
 * them. This is a pattern that's used by numerour classes. This registry aims
 * to centralise the functionality necessary to keep track of subscriptions and
 * their respective timeouts.
 */
export declare class TimeoutRegistry extends EventEmitter {
    private options;
    private services;
    private register;
    private ackRegister;
    constructor(services: IServices, options: IOptions);
    /**
     * Add an entry
     */
    add(timeout: ITimeout): number;
    /**
     * Remove an entry
     */
    remove(message: Message): void;
    /**
     * Processes an incoming ACK-message and removes the corresponding subscription
     */
    clear(timerId: number): void;
    /**
     * Remote all timeouts when connection disconnects
     */
    onConnectionLost(): void;
    /**
     * Will be invoked if the timeout has occured before the ack message was received
     */
    private onTimeout;
    /**
     * Returns a unique name from the timeout
     */
    private getUniqueName;
}
