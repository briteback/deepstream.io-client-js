import { parse } from '../../binary-protocol/src/message-parser'
import { getMessage } from '../../binary-protocol/src/message-builder'
import { Message, TOPIC, CONNECTION_ACTIONS } from '../../binary-protocol/src/message-constants'

export type SocketFactory = (url: string, options: object) => Socket
export interface Socket extends WebSocket {
  onparsedmessages: (messages: Array<Message>) => void
  sendParsedMessage: (message: Message) => void
}

const BrowserWebsocket = (global.WebSocket || global.MozWebSocket) as any

import * as NodeWebSocket from 'ws'

export const socketFactory = (url: string, options: any): Socket => {
  const useBrowserSocket = (options && options.WebSocketImplementation) ?
    options.WebSocketImplementation === BrowserWebsocket :
    BrowserWebsocket;
  const socket =
    (options && options.WebSocketImplementation) ? new options.WebSocketImplementation(url, [], options) :
    BrowserWebsocket ? new BrowserWebsocket(url, [], options) :
    new NodeWebSocket(url, options) as any

  if (useBrowserSocket) {
    socket.binaryType = 'arraybuffer'
  }

  // tslint:disable-next-line:no-empty
  socket.onparsedmessage = () => {}
  socket.onmessage = (raw: {data: Buffer}) => {
    if (typeof raw.data === 'string') {
      // TODO: We expect to always receive a buffer here but it seems like we
      // sometimes get string. How does this happen?
      raw.data = Buffer.from(raw.data)
    }
    const parseResults = parse(useBrowserSocket ? new Buffer(new Uint8Array(raw.data)) : raw.data)
    socket.onparsedmessages(parseResults)
  }
  socket.sendParsedMessage = (message: Message): void => {
    if (message.topic === TOPIC.CONNECTION && message.action === CONNECTION_ACTIONS.CLOSING) {
      socket.onparsedmessages([{ topic: TOPIC.CONNECTION, action: CONNECTION_ACTIONS.CLOSED }])
      socket.close()
      return
    }
    message.data = JSON.stringify(message.parsedData)
    socket.send(getMessage(message, false))
  }
  return socket
}
