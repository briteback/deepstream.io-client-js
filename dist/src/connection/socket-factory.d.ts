import { Message } from "../../binary-protocol/src/message-constants";
export declare type SocketFactory = (url: string, options: object, internalEmitter: any) => ISocket;
export interface ISocket extends WebSocket {
    onparsedmessages: (messages: Message[]) => void;
    sendParsedMessage: (message: Message) => void;
}
export declare const SOCKET_UNOPENED_ON_SEND = "CLOSED_SOCKET";
export declare const socketFactory: (url: string, options: any, internalEmitter: any) => ISocket;
