import { Client } from './client';
import { EVENT, CONNECTION_STATE } from './constants';
import * as C from '../binary-protocol/src/message-constants';
declare const _default: ((url: string, options?: any) => Client) & {
    CONNECTION_STATE: typeof CONNECTION_STATE;
    C: typeof C;
    EVENT: typeof EVENT;
    deepstream: (url: string, options?: any) => Client;
    MERGE_STRATEGIES: {
        LOCAL_WINS: (localValue: object, localVersion: number, remoteValue: object, remoteVersion: number, callback: (error: string | null, mergedData: any) => void) => void;
        REMOTE_WINS: (localValue: object, localVersion: number, remoteValue: object, remoteVersion: number, callback: (error: string | null, mergedData: any) => void) => void;
    };
};
export = _default;
