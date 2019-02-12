import * as EventEmitter from "component-emitter2";
import { AuthenticationCallback, Connection, ResumeCallback } from "./connection/connection";
import { CONNECTION_STATE } from "./constants";
import { EventHandler } from "./event/event-handler";
import { PresenceHandler } from "./presence/presence-handler";
import { RecordHandler } from "./record/record-handler";
import { RPCHandler } from "./rpc/rpc-handler";
import { Logger } from "./util/logger";
import { TimeoutRegistry } from "./util/timeout-registry";
import { TimerRegistry } from "./util/timer-registry";
export declare type offlineStoreWriteResponse = ((error: string | null) => void);
declare type DataType = string[] | object | null;
export interface IRecordOfflineStore {
    get: (recordName: string, callback: ((recordName: string, version: number, data: DataType) => void)) => void;
    set: (recordName: string, version: number, data: string[] | object, callback: offlineStoreWriteResponse) => void;
    delete: (recordName: string, callback: offlineStoreWriteResponse) => void;
}
export interface IServices {
    logger: Logger;
    connection: Connection;
    timeoutRegistry: TimeoutRegistry;
    timerRegistry: TimerRegistry;
    emitter: Emitter;
}
export declare class Client extends EventEmitter {
    event: EventHandler;
    rpc: RPCHandler;
    record: RecordHandler;
    presence: PresenceHandler;
    private services;
    private options;
    constructor(url: string, options?: any);
    login(details?: object): Promise<object>;
    login(callback: AuthenticationCallback): void;
    login(details: object, callback: AuthenticationCallback): void;
    getConnectionState(): CONNECTION_STATE;
    close(): void;
    pause(): void;
    reconnect(): void;
    resume(callback?: ResumeCallback): void | Promise<object>;
    /**
     * Returns a random string. The first block of characters
     * is a timestamp, in order to allow databases to optimize for semi-
     * sequentuel numberings
     */
    getUid(): string;
}
export {};
