import { parse } from '../../binary-protocol/src/message-parser';
import { getMessage } from '../../binary-protocol/src/message-builder';
import { TOPIC, CONNECTION_ACTIONS } from '../../binary-protocol/src/message-constants';
const BrowserWebsocket = (global.WebSocket || global.MozWebSocket);
import * as NodeWebSocket from 'ws';
export const socketFactory = (url, options) => {
    const useBrowserSocket = options.WebSocketImplementation ?
        options.WebSocketImplementation === BrowserWebsocket :
        BrowserWebsocket;
    const socket = options.WebSocketImplementation ? options.WebSocketImplementation :
        BrowserWebsocket ? new BrowserWebsocket(url, [], options) :
            new NodeWebSocket(url, options);
    if (useBrowserSocket) {
        socket.binaryType = 'arraybuffer';
    }
    // tslint:disable-next-line:no-empty
    socket.onparsedmessage = () => { };
    socket.onmessage = (raw) => {
        if (typeof raw.data === 'string') {
            // TODO: We expect to always receive a buffer here but it seems like we
            // sometimes get string. How does this happen?
            raw.data = Buffer.from(raw.data);
        }
        const parseResults = parse(useBrowserSocket ? new Buffer(new Uint8Array(raw.data)) : raw.data);
        socket.onparsedmessages(parseResults);
    };
    socket.sendParsedMessage = (message) => {
        if (message.topic === TOPIC.CONNECTION && message.action === CONNECTION_ACTIONS.CLOSING) {
            socket.onparsedmessages([{ topic: TOPIC.CONNECTION, action: CONNECTION_ACTIONS.CLOSED }]);
            socket.close();
            return;
        }
        message.data = JSON.stringify(message.parsedData);
        socket.send(getMessage(message, false));
    };
    return socket;
};
//# sourceMappingURL=socket-factory.js.map