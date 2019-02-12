import { getMessage } from "../../binary-protocol/src/message-builder";
import { CONNECTION_ACTIONS, Message, TOPIC } from "../../binary-protocol/src/message-constants";
import { parse } from "../../binary-protocol/src/message-parser";

export type SocketFactory = (url: string, options: object, internalEmitter: any) => ISocket;
export interface ISocket extends WebSocket {
  onparsedmessages: (messages: Message[]) => void;
  sendParsedMessage: (message: Message) => void;
}

export const SOCKET_UNOPENED_ON_SEND = "CLOSED_SOCKET";

const BrowserWebsocket = (global.WebSocket || global.MozWebSocket) as any;

import * as NodeWebSocket from "ws";

export const socketFactory = (url: string, options: any, internalEmitter: any): ISocket => {
  const socket = BrowserWebsocket
    ? new BrowserWebsocket(url, [], options)
    : new NodeWebSocket(url, options) as any;

  if (BrowserWebsocket) {
    socket.binaryType = "arraybuffer";
  }

  // tslint:disable-next-line:no-empty
  socket.onparsedmessage = () => { };
  socket.onmessage = (raw: { data: Buffer }) => {
    if (typeof raw.data === "string") {
      // TODO: We expect to always receive a buffer here but it seems like we
      // sometimes get string. How does this happen?
      raw.data = Buffer.from(raw.data);
    }
    const parseResults = parse(BrowserWebsocket ? new Buffer(new Uint8Array(raw.data)) : raw.data);
    socket.onparsedmessages(parseResults);
  };
  socket.sendParsedMessage = (message: Message): void => {
    if (message.topic === TOPIC.CONNECTION && message.action === CONNECTION_ACTIONS.CLOSING) {
      socket.onparsedmessages([{ topic: TOPIC.CONNECTION, action: CONNECTION_ACTIONS.CLOSED }]);
      socket.close();
      return;
    }
    message.data = JSON.stringify(message.parsedData);
    if (socket.readyState !== socket.OPEN) {
      internalEmitter.emit(SOCKET_UNOPENED_ON_SEND);
      throw Error(`Trying to send messages while socket isn't OPEN`);
    }
    socket.send(getMessage(message, false));
  };
  return socket;
};
