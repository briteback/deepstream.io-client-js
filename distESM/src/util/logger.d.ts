import { ALL_ACTIONS, Message, TOPIC } from "../../binary-protocol/src/message-constants";
import { EVENT } from "../constants";
export declare class Logger {
    private emitter;
    constructor(emitter: Emitter);
    warn(message: {
        topic: TOPIC;
    } | Message, event?: EVENT | ALL_ACTIONS, meta?: any): void;
    error(message: {
        topic: TOPIC;
    } | Message, event?: EVENT | ALL_ACTIONS, meta?: string | object): void;
    E(message: string): void;
}
