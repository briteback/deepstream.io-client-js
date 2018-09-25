// tslint:disable:no-empty
import { mock, stub, match } from 'sinon';
import { CONNECTION_STATE } from '../src/constants';
import { TimerRegistry } from '../src/util/timer-registry';
import { RECORD_ACTIONS } from '../binary-protocol/src/message-constants';
import { SingleNotifier } from '../src/record/single-notifier';
import { WriteAcknowledgementService } from '../src/record/write-ack-service';
import { DirtyService } from '../src/record/dirty-service';
import { Listener } from '../src/util/listener';
let lastMessageSent;
export const getLastMessageSent = () => lastMessageSent;
export const getServicesMock = () => {
    let handle = null;
    let onReestablished;
    let onLost;
    let onExitLimbo;
    const connection = {
        sendMessage: (message) => { lastMessageSent = message; },
        getConnectionState: stub().returns(CONNECTION_STATE.OPEN),
        isConnected: true,
        isInLimbo: false,
        registerHandler: (topic, callback) => {
            handle = callback;
        },
        onReestablished: (callback) => {
            onReestablished = callback;
        },
        onLost: (callback) => {
            onLost = callback;
        },
        onExitLimbo: (callback) => {
            onExitLimbo = callback;
        },
        removeOnReestablished: () => { },
        removeOnLost: () => { }
    };
    const connectionMock = mock(connection);
    const timeoutRegistry = {
        add: () => { },
        remove: () => { },
        clear: () => { }
    };
    const timeoutRegistryMock = mock(timeoutRegistry);
    const logger = {
        warn: () => { },
        error: () => { }
    };
    const loggerMock = mock(logger);
    loggerMock.expects('warn').never();
    // loggerMock.expects('error').never()
    const timerRegistry = new TimerRegistry();
    // tslint:disable-next-line
    class Socket {
        constructor(url) {
            this.url = url;
        }
        sendParsedMessage(message) { }
        onparsedmessages(message) { }
        onopen() { }
        onerror() { }
        onclose() { }
        close() {
            process.nextTick(this.onclose);
        }
        simulateRemoteClose() {
            this.close();
        }
        simulateOpen() {
            process.nextTick(this.onopen);
        }
        simulateError() {
            process.nextTick(this.onerror.bind(null, { code: 1234 }));
        }
        simulateMessages(messages) {
            process.nextTick(this.onparsedmessages.bind(this, messages));
        }
    }
    let socket;
    const socketFactory = (url, options) => {
        socket = new Socket(url);
        return socket;
    };
    const storage = {
        get: () => { },
        set: () => { },
        delete: () => { }
    };
    const storageMock = mock(storage);
    return {
        socketFactory,
        getSocket: () => ({ socket, socketMock: mock(socket) }),
        connection,
        connectionMock,
        timeoutRegistry,
        timeoutRegistryMock,
        logger,
        loggerMock,
        getLogger: () => ({ logger, loggerMock }),
        timerRegistry,
        getHandle: () => handle,
        simulateConnectionLost: () => onLost(),
        simulateConnectionReestablished: () => onReestablished(),
        simulateExitLimbo: () => onExitLimbo(),
        storage,
        storageMock,
        verify: () => {
            connectionMock.verify();
            timeoutRegistryMock.verify();
            loggerMock.verify();
            storageMock.verify();
        }
    };
};
export const getRecordServices = (services) => {
    services.storageMock.expects('get').withArgs('__ds__dirty_records', match.func).atLeast(0).callsArgWith(1, '__ds__dirty_records', 1, {});
    services.storageMock.expects('set').withArgs('__ds__dirty_records', 1, match.any, match.func).atLeast(0);
    const dirtyService = new DirtyService(services.storage, '__ds__dirty_records');
    const headRegistry = new SingleNotifier(services, RECORD_ACTIONS.HEAD, 50);
    const readRegistry = new SingleNotifier(services, RECORD_ACTIONS.READ, 50);
    const writeAckService = new WriteAcknowledgementService(services);
    const dirtyServiceMock = mock(dirtyService);
    const readRegistryMock = mock(readRegistry);
    const headRegistryMock = mock(headRegistry);
    const writeAckServiceMock = mock(writeAckService);
    return {
        dirtyService,
        dirtyServiceMock,
        headRegistry,
        headRegistryMock,
        readRegistry,
        readRegistryMock,
        writeAckService,
        writeAckServiceMock,
        verify: () => {
            dirtyServiceMock.verify();
            headRegistryMock.verify();
            readRegistryMock.verify();
            writeAckServiceMock.verify();
        }
    };
};
export const getListenerMock = () => {
    const listener = Listener.prototype;
    const listenerMock = mock(listener);
    return {
        listener,
        listenerMock
    };
};
//# sourceMappingURL=mocks.js.map