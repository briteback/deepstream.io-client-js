// tslint:disable:no-empty
import { mock, stub, SinonStub, SinonMock, match } from 'sinon'
import { CONNECTION_STATE } from '../src/constants'
import { TimerRegistry } from '../src/util/timer-registry'
import { Message, RECORD_ACTIONS } from '../binary-protocol/src/message-constants'
import { SingleNotifier } from '../src/record/single-notifier'
import { WriteAcknowledgementService } from '../src/record/write-ack-service'
import { Listener } from '../src/util/listener'

let lastMessageSent: Message
export const getLastMessageSent = () => lastMessageSent

export const getServicesMock = () => {
  let handle: Function | null = null
  let onReestablished: Function
  let onLost: Function
  let onExitLimbo: Function

  const connection = {
      sendMessage: (message: Message) => { lastMessageSent = message },
      getConnectionState: stub().returns(CONNECTION_STATE.OPEN) as SinonStub,
      isConnected: true,
      isInLimbo: false,
      registerHandler: (topic: any, callback: Function): void => {
        handle = callback
      },
      onReestablished: (callback: Function): void => {
        onReestablished = callback
      },
      onLost: (callback: Function): void => {
        onLost = callback
      },
      onExitLimbo: (callback: Function): void => {
        onExitLimbo = callback
      },
      removeOnReestablished: () => {},
      removeOnLost: () => {}
  }
  const connectionMock = mock(connection)

  const timeoutRegistry = {
      add: () => {},
      remove: () => {},
      clear: () => {}
  }
  const timeoutRegistryMock = mock(timeoutRegistry)

  const logger = {
      warn: () => {},
      error: () => {}
  }
  const loggerMock = mock(logger)
  loggerMock.expects('warn').never()
  // loggerMock.expects('error').never()

  const timerRegistry = new TimerRegistry()

  // tslint:disable-next-line
  class Socket {
    public url: string
    constructor (url: string) {
      this.url = url
    }
    public sendParsedMessage (message: Message): void {}
    public onparsedmessages (message: Array<Message>): void {}
    public onopen (): void {}
    public onerror (): void {}
    public onclose (): void {}
    public close (): void {
      process.nextTick(this.onclose)
    }
    public simulateRemoteClose (): void {
      this.close()
    }
    public simulateOpen (): void {
      process.nextTick(this.onopen)
    }
    public simulateError (): void {
      process.nextTick(this.onerror.bind(null, { code: 1234 }))
    }
    public simulateMessages (messages: Array<Message>): void {
      process.nextTick(this.onparsedmessages.bind(this, messages))
    }
  }

  let socket: Socket
  const socketFactory = (url: string, options: object): any => {
    socket = new Socket(url)
    return socket
  }

  const storage = {
    get: () => {},
    set: () => {},
    delete: () => {}
  }
  const storageMock = mock(storage)

  return {
    socketFactory,
    getSocket: (): any => ({ socket, socketMock: mock(socket) }),
    connection,
    connectionMock,
    timeoutRegistry,
    timeoutRegistryMock,
    logger,
    loggerMock,
    getLogger: (): any => ({ logger, loggerMock}),
    timerRegistry,
    getHandle: (): Function | null => handle,
    simulateConnectionLost: (): void => onLost(),
    simulateConnectionReestablished: (): void => onReestablished(),
    simulateExitLimbo: (): void => onExitLimbo(),
    storage,
    storageMock,
    verify: () => {
      connectionMock.verify()
      timeoutRegistryMock.verify()
      loggerMock.verify()
      storageMock.verify()
    }
  }
}

export const getRecordServices = (services: any) => {
  services.storageMock.expects('get').withArgs('__ds__dirty_records', match.func).atLeast(0).callsArgWith(1, '__ds__dirty_records', 1, {})
  services.storageMock.expects('set').withArgs('__ds__dirty_records', 1, match.any, match.func).atLeast(0)
  const headRegistry = new SingleNotifier(services, RECORD_ACTIONS.HEAD, 50)
  const readRegistry = new SingleNotifier(services, RECORD_ACTIONS.READ, 50)
  const writeAckService = new WriteAcknowledgementService(services)

  const readRegistryMock =  mock(readRegistry)
  const headRegistryMock = mock(headRegistry)
  const writeAckServiceMock = mock(writeAckService)

  return {
    headRegistry,
    headRegistryMock,
    readRegistry,
    readRegistryMock,
    writeAckService,
    writeAckServiceMock,
    verify: () => {
      headRegistryMock.verify()
      readRegistryMock.verify()
      writeAckServiceMock.verify()
    }
  }
}

export const getListenerMock = (): { listener: any, listenerMock: SinonMock } => {
  const listener = Listener.prototype
  const listenerMock = mock(listener)
  return {
    listener,
    listenerMock
  }
}
