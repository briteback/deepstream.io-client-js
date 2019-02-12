import { EventMessage, RecordMessage, TOPIC } from "../../binary-protocol/src/message-constants";
import { IServices } from "../client";
export interface IListenResponse {
    accept: () => void;
    reject: (reason?: string) => void;
    onStop: (callback: (subscriptionName: string) => void) => void;
}
export declare type ListenCallback = (subscriptionName: string, listenResponse: IListenResponse) => void;
export declare class Listener {
    private topic;
    private actions;
    private services;
    private listeners;
    private stopCallbacks;
    constructor(topic: TOPIC, services: IServices);
    listen(pattern: string, callback: ListenCallback): void;
    unlisten(pattern: string): void;
    handle(message: EventMessage | RecordMessage): void;
    /**
     * Accepting a listener request informs deepstream that the current provider is willing to
     * provide the record or event matching the subscriptionName . This will establish the current
     * provider as the only publisher for the actual subscription with the deepstream cluster.
     * Either accept or reject needs to be called by the listener
     */
    private accept;
    /**
     * Rejecting a listener request informs deepstream that the current provider is not willing
     * to provide the record or event matching the subscriptionName . This will result in deepstream
     * requesting another provider to do so instead. If no other provider accepts or exists, the
     * resource will remain unprovided.
     * Either accept or reject needs to be called by the listener
     */
    private reject;
    private stop;
    private onConnectionLost;
    private onConnectionReestablished;
    private sendListen;
    private sendUnlisten;
}
