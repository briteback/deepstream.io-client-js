import * as C from "../binary-protocol/src/message-constants";
import { Client } from "./client";
import { CONNECTION_STATE, EVENT } from "./constants";
declare const _default: ((url: string, options?: any) => Client) & {
    C: typeof C;
    CONNECTION_STATE: typeof CONNECTION_STATE;
    EVENT: typeof EVENT;
    MERGE_STRATEGIES: {
        LOCAL_WINS: (localValue: object, localVersion: number, remoteValue: object, remoteVersion: number, callback: import("./record/merge-strategy").MergeCompleteCallback) => void;
        REMOTE_WINS: (localValue: object, localVersion: number, remoteValue: object, remoteVersion: number, callback: import("./record/merge-strategy").MergeCompleteCallback) => void;
    };
    deepstream: (url: string, options?: any) => Client;
};
export default _default;
