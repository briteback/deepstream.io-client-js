var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Promise as BBPromise } from 'bluebird';
import { expect } from 'chai';
import { mock, spy, assert } from 'sinon';
import { Connection } from '../../src/connection/connection';
import { getServicesMock } from '../mocks';
import { DefaultOptions } from '../../src/client-options';
import { EVENT, CONNECTION_STATE } from '../../src/constants';
import { TOPIC, CONNECTION_ACTIONS as CONNECTION_ACTION, AUTH_ACTIONS as AUTH_ACTION, EVENT_ACTIONS as EVENT_ACTION } from '../../binary-protocol/src/message-constants';
import * as Emitter from 'component-emitter2';
describe('connection', () => {
    let connection;
    let services;
    let options;
    let emitter;
    let emitterMock;
    let socket;
    let socketMock;
    let logger;
    let loggerMock;
    let authCallback;
    const url = 'wss://localhost:6020/deepstream';
    const authData = { password: '123456' };
    const clientData = { name: 'elton' };
    const heartbeatInterval = 15;
    const initialUrl = 'wss://localhost:6020/deepstream';
    const otherUrl = 'wss://otherhost:6020/deepstream';
    const reconnectIntervalIncrement = 10;
    const maxReconnectAttempts = 3;
    const maxReconnectInterval = 30;
    const offlineBufferTimeout = 10;
    beforeEach(() => {
        services = getServicesMock();
        options = Object.assign(DefaultOptions, {
            heartbeatInterval,
            reconnectIntervalIncrement,
            maxReconnectAttempts,
            maxReconnectInterval,
            offlineBufferTimeout
        });
        emitter = new Emitter();
        emitterMock = mock(emitter);
        connection = new Connection(services, options, initialUrl, emitter);
        getSocketMock();
        getLoggerMock();
        authCallback = spy();
    });
    afterEach(() => {
        services.verify();
        emitterMock.verify();
        loggerMock.verify();
    });
    it('supports happiest path', () => __awaiter(this, void 0, void 0, function* () {
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendAuth();
        yield receiveAuthResponse();
        yield sendMessage();
        yield closeConnection();
        yield recieveConnectionClose();
    }));
    it('send pong when ping received across all states', () => __awaiter(this, void 0, void 0, function* () {
        yield openConnection();
        sendPong();
        receivePing();
    }));
    it('miss heartbeat once', () => __awaiter(this, void 0, void 0, function* () {
        yield openConnection();
        yield BBPromise.delay(heartbeatInterval * 1.5);
        // verify no errors in afterAll
    }));
    it('miss a heartbeat twice and receive error', () => __awaiter(this, void 0, void 0, function* () {
        loggerMock
            .expects('error')
            .once()
            .withExactArgs({ topic: TOPIC.CONNECTION }, EVENT.HEARTBEAT_TIMEOUT);
        yield openConnection();
        yield BBPromise.delay(heartbeatInterval * 3);
        yield BBPromise.delay(10);
    }));
    it('get redirected to server B while connecting to server A, reconnect to server A when connection to server B is lost', () => __awaiter(this, void 0, void 0, function* () {
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveRedirect();
        yield openConnectionToRedirectedServer();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield loseConnection();
        yield reconnectToInitialServer();
    }));
    it('handles challenge denial', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CHALLENGE_DENIED);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeReject();
    }));
    it('handles authentication when challenge was denied', () => __awaiter(this, void 0, void 0, function* () {
        loggerMock
            .expects('error')
            .once()
            .withArgs({ topic: TOPIC.CONNECTION }, EVENT.IS_CLOSED);
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CHALLENGE_DENIED);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeReject();
        connection.authenticate(authData, authCallback);
        assert.callCount(authCallback, 0);
        yield BBPromise.delay(10);
    }));
    it('handles successful authentication', () => __awaiter(this, void 0, void 0, function* () {
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendAuth();
        yield receiveAuthResponse();
        assert.calledOnce(authCallback);
        assert.calledWithExactly(authCallback, true, clientData);
    }));
    it('handles rejected authentication', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_AUTHENTICATION);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendAuth();
        yield receiveAuthRejectResponse();
        assert.calledOnce(authCallback);
        assert.calledWithExactly(authCallback, false, { reason: EVENT.INVALID_AUTHENTICATION_DETAILS });
    }));
    it('handles authenticating too may times', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendAuth();
        yield receiveTooManyAuthAttempts();
    }));
    it('handles authentication timeout', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AUTHENTICATION_TIMEOUT);
        // loggerMock
        //   .expects('error')
        //   .once()
        //   .withExactArgs(
        //     { topic: TOPIC.CONNECTION },
        //     EVENT.AUTHENTICATION_TIMEOUT
        // )
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield receiveAuthenticationTimeout();
    }));
    it('try to authenticate with invalid data and receive error', () => __awaiter(this, void 0, void 0, function* () {
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendBadAuthDataAndReceiveError();
    }));
    it('tries to reconnect everytome connection fails, stops when max reconnection attempts is reached and closes connection', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CLOSING);
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.RECONNECTING);
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT[EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED], 3);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        // try to reconnect first time
        yield receiveConnectionError();
        yield BBPromise.delay(0);
        // try to reconnect second time
        yield receiveConnectionError();
        yield BBPromise.delay(10);
        // try to reconnct third time (now max is reached)
        yield receiveConnectionError();
        yield BBPromise.delay(20);
        // try to reconnect fourth time (try to surpass the allowed max, fail)
        yield receiveConnectionError();
        yield BBPromise.delay(30);
    }));
    it('tries to reconnect if the connection drops unexpectedly', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.RECONNECTING);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield receiveConnectionError();
    }));
    it('emits reauthenticationFailure if reauthentication is rejected', () => __awaiter(this, void 0, void 0, function* () {
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.RECONNECTING);
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_AUTHENTICATION);
        emitterMock
            .expects('emit')
            .once()
            .withExactArgs(EVENT.REAUTHENTICATION_FAILURE, { reason: EVENT.INVALID_AUTHENTICATION_DETAILS });
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAccept();
        yield sendAuth();
        yield receiveAuthResponse();
        yield receiveConnectionError();
        yield BBPromise.delay(0);
        yield awaitConnectionAck();
        yield sendChallenge();
        yield receiveChallengeAcceptAndResendAuth();
        yield receiveAuthRejectResponse();
        yield BBPromise.delay(0);
        assert.calledOnce(authCallback);
    }));
    it('goes into limbo on connection lost', () => __awaiter(this, void 0, void 0, function* () {
        yield openConnection();
        const limboSpy = spy();
        connection.onExitLimbo(limboSpy);
        yield loseConnection();
        expect(connection.isInLimbo).to.equal(true);
        yield BBPromise.delay(20);
        assert.calledOnce(limboSpy);
        expect(connection.isInLimbo).to.equal(false);
    }));
    function openConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateOpen();
            yield BBPromise.delay(0);
        });
    }
    function awaitConnectionAck() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_CONNECTION);
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CHALLENGING);
            expect(socket.url).to.equal(initialUrl);
            socket.simulateOpen();
            yield BBPromise.delay(0);
        });
    }
    function sendChallenge() {
        return __awaiter(this, void 0, void 0, function* () {
            socketMock
                .expects('sendParsedMessage')
                .once()
                .withExactArgs([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.CHALLENGE,
                    url
                }]);
            yield BBPromise.delay(0);
        });
    }
    function receiveChallengeAccept() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_AUTHENTICATION);
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.ACCEPT
                }]);
            yield BBPromise.delay(0);
        });
    }
    function receiveChallengeAcceptAndResendAuth() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_AUTHENTICATION);
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AUTHENTICATING);
            socketMock
                .expects('sendParsedMessage')
                .once()
                .withExactArgs({
                topic: TOPIC.AUTH,
                action: AUTH_ACTION.REQUEST,
                parsedData: authData
            });
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.ACCEPT
                }]);
            yield BBPromise.delay(0);
        });
    }
    function receiveChallengeReject() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.REJECT
                }]);
            yield BBPromise.delay(0);
        });
    }
    function sendAuth() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AUTHENTICATING);
            socketMock
                .expects('sendParsedMessage')
                .once()
                .withExactArgs({
                topic: TOPIC.AUTH,
                action: AUTH_ACTION.REQUEST,
                parsedData: authData
            });
            connection.authenticate(authData, authCallback);
            yield BBPromise.delay(0);
        });
    }
    function sendBadAuthDataAndReceiveError() {
        return __awaiter(this, void 0, void 0, function* () {
            expect(() => {
                connection.authenticate('Bad Auth Data', authCallback);
            }).to.throw('invalid argument authParamsOrCallback');
            expect(() => {
                connection.authenticate({}, 'Bad Auth Data');
            }).to.throw('invalid argument callback');
            yield BBPromise.delay(0);
        });
    }
    // async function sendInvalidAuth () {
    //   emitterMock.expects('emit')
    //     .once()
    //     .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AUTHENTICATING)
    //   socketMock
    //     .expects('sendParsedMessage')
    //     .once()
    //     .withExactArgs({
    //       topic: TOPIC.AUTH,
    //       action: AUTH_ACTION.REQUEST,
    //       parsedData: { _username: 'invalid' } // assume this is invalid
    //     })
    //   connection.authenticate({ _username: 'invalid' }, authCallback)
    //   await BBPromise.delay(0)
    // }
    function receiveAuthResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const receivedClientData = data || clientData;
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.OPEN);
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CLIENT_DATA_CHANGED, Object.assign({}, receivedClientData));
            socket.simulateMessages([{
                    topic: TOPIC.AUTH,
                    action: AUTH_ACTION.AUTH_SUCCESSFUL,
                    parsedData: Object.assign({}, receivedClientData)
                }]);
            yield BBPromise.delay(5);
        });
    }
    function sendMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateMessages([{
                    topic: TOPIC.EVENT,
                    action: EVENT_ACTION.EMIT,
                    name: 'eventA'
                }]);
            yield BBPromise.delay(0);
        });
    }
    function closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CLOSING);
            socketMock
                .expects('sendParsedMessage')
                .once()
                .withExactArgs({
                topic: TOPIC.CONNECTION,
                action: CONNECTION_ACTION.CLOSING
            });
            connection.close();
            yield BBPromise.delay(0);
        });
    }
    function recieveConnectionClose() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock.expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CLOSED);
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.CLOSING
                }]);
            socket.simulateRemoteClose();
            yield BBPromise.delay(0);
        });
    }
    function receivePing() {
        socket.simulateMessages([{
                topic: TOPIC.CONNECTION,
                action: CONNECTION_ACTION.PING
            }]);
    }
    function sendPong() {
        socketMock
            .expects('sendParsedMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.CONNECTION,
            action: CONNECTION_ACTION.PONG
        });
    }
    function receiveConnectionError() {
        return __awaiter(this, void 0, void 0, function* () {
            loggerMock
                .expects('error')
                .once()
                .withExactArgs({ topic: TOPIC.CONNECTION }, EVENT.CONNECTION_ERROR, JSON.stringify({ code: 1234 }));
            socket.simulateError();
            yield BBPromise.delay(0);
        });
    }
    function receiveRedirect() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock
                .expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.REDIRECTING);
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.REDIRECT,
                    url: otherUrl
                }]);
            yield BBPromise.delay(0);
        });
    }
    function openConnectionToRedirectedServer() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock
                .expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.AWAITING_CONNECTION);
            emitterMock
                .expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.CHALLENGING);
            getSocketMock();
            expect(socket.url).to.equal(otherUrl);
            socket.simulateOpen();
            yield BBPromise.delay(0);
        });
    }
    function receiveAuthRejectResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateMessages([{
                    topic: TOPIC.AUTH,
                    action: AUTH_ACTION.AUTH_UNSUCCESSFUL,
                    parsedData: AUTH_ACTION.INVALID_MESSAGE_DATA
                }]);
            yield BBPromise.delay(10);
        });
    }
    function loseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            emitterMock
                .expects('emit')
                .once()
                .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.RECONNECTING);
            socket.close();
            yield BBPromise.delay(0);
            expect(connection.isConnected).to.equal(false);
        });
    }
    function reconnectToInitialServer() {
        return __awaiter(this, void 0, void 0, function* () {
            socketMock
                .expects('onopen')
                .once();
            socketMock
                .expects('sendParsedMessage')
                .once()
                .withExactArgs({
                topic: TOPIC.CONNECTION,
                action: CONNECTION_ACTION.CHALLENGE,
                url
            });
            socket.simulateOpen();
            yield BBPromise.delay(0);
        });
    }
    // async function connectionClosedError () {
    //   loggerMock
    //     .expects('error')
    //     .once()
    //     .withExactArgs({ topic: TOPIC.CONNECTION }, EVENT.IS_CLOSED)
    //   await BBPromise.delay(0)
    // }
    // async function receiveInvalidParseError () {
    //   socket.simulateMessages([{
    //     topic: TOPIC.AUTH,
    //     action: AUTH_ACTION.INVALID_MESSAGE_DATA,
    //     data: 'invalid authentication message'
    //   }])
    //   await BBPromise.delay(0)
    //   assert.calledOnce(authCallback)
    //   assert.calledWithExactly(authCallback, false, { reason: EVENT.INVALID_AUTHENTICATION_DETAILS })
    //   await BBPromise.delay(0)
    // }
    function receiveTooManyAuthAttempts() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateMessages([{
                    topic: TOPIC.AUTH,
                    action: AUTH_ACTION.TOO_MANY_AUTH_ATTEMPTS
                }]);
            yield BBPromise.delay(0);
        });
    }
    function receiveAuthenticationTimeout() {
        return __awaiter(this, void 0, void 0, function* () {
            socket.simulateMessages([{
                    topic: TOPIC.CONNECTION,
                    action: CONNECTION_ACTION.AUTHENTICATION_TIMEOUT
                }]);
            yield BBPromise.delay(0);
        });
    }
    // function losesConnection () {
    //   emitterMock
    //     .expects('emit')
    //     .once()
    //     .withExactArgs(EVENT.CONNECTION_STATE_CHANGED, CONNECTION_STATE.RECONNECTING)
    //   socket.simulateRemoteClose()
    // }
    function getSocketMock() {
        const socketService = services.getSocket();
        socket = socketService.socket;
        socketMock = socketService.socketMock;
    }
    function getLoggerMock() {
        const loggerService = services.getLogger();
        logger = loggerService.logger,
            loggerMock = loggerService.loggerMock;
    }
});
//# sourceMappingURL=connectionSpec.js.map