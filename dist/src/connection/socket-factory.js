"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_parser_1 = require("../../binary-protocol/src/message-parser");
const message_builder_1 = require("../../binary-protocol/src/message-builder");
const message_constants_1 = require("../../binary-protocol/src/message-constants");
const BrowserWebsocket = (global.WebSocket || global.MozWebSocket);
const NodeWebSocket = require("ws");
exports.socketFactory = (url, options) => {
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
        const parseResults = message_parser_1.parse(useBrowserSocket ? new Buffer(new Uint8Array(raw.data)) : raw.data);
        socket.onparsedmessages(parseResults);
    };
    socket.sendParsedMessage = (message) => {
        if (message.topic === message_constants_1.TOPIC.CONNECTION && message.action === message_constants_1.CONNECTION_ACTIONS.CLOSING) {
            socket.onparsedmessages([{ topic: message_constants_1.TOPIC.CONNECTION, action: message_constants_1.CONNECTION_ACTIONS.CLOSED }]);
            socket.close();
            return;
        }
        message.data = JSON.stringify(message.parsedData);
        socket.send(message_builder_1.getMessage(message, false));
    };
    return socket;
};
//# sourceMappingURL=socket-factory.js.map