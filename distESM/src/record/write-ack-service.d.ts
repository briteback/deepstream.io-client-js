import { Message } from "../../binary-protocol/src/message-constants";
import { IServices } from "../client";
import { WriteAckCallback } from "./record-core";
export declare class WriteAcknowledgementService {
    private services;
    private responses;
    private count;
    constructor(services: IServices);
    /**
     * Send message with write ack callback.
     */
    send(message: Message, callback: WriteAckCallback): void;
    recieve(message: Message): void;
    private onConnectionLost;
}
