var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Promise as BBPromise } from 'bluebird';
import { assert, spy } from 'sinon';
import { getServicesMock } from '../mocks';
import { EVENT } from '../../src/constants';
import { TOPIC, RECORD_ACTIONS as RA } from '../../binary-protocol/src/message-constants';
import { WriteAcknowledgementService } from '../../src/record/write-ack-service';
describe('Write Ack Notifier', () => {
    const topic = TOPIC.RECORD;
    const action = RA.CREATEANDPATCH;
    const ackAction = RA.CREATEANDPATCH_WITH_WRITE_ACK;
    const name = 'record';
    let services;
    let writeAckService;
    let callbackSpy;
    beforeEach(() => {
        services = getServicesMock();
        writeAckService = new WriteAcknowledgementService(services);
        callbackSpy = spy();
    });
    afterEach(() => {
        services.verify();
    });
    it('cant\'t send request when client is offline', () => __awaiter(this, void 0, void 0, function* () {
        services.connection.isConnected = false;
        services.connectionMock
            .expects('sendMessage')
            .never();
        writeAckService.send({
            topic,
            action,
            name
        }, callbackSpy);
        yield BBPromise.delay(1);
        assert.calledOnce(callbackSpy);
        assert.calledWithExactly(callbackSpy, EVENT.CLIENT_OFFLINE);
    }));
    it('calls callbacks with error message when connection is lost', () => __awaiter(this, void 0, void 0, function* () {
        const messageBody = {
            topic,
            action,
            name
        };
        writeAckService.send(messageBody, callbackSpy);
        writeAckService.send(messageBody, callbackSpy);
        services.simulateConnectionLost();
        yield BBPromise.delay(1);
        assert.calledTwice(callbackSpy);
        assert.calledWithExactly(callbackSpy, EVENT.CLIENT_OFFLINE);
    }));
    it('sends correct messages with different correlationsId for each call', () => {
        const messageBody = {
            topic,
            action,
            name,
        };
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs(Object.assign({}, messageBody, { action: ackAction, correlationId: '1' }));
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs(Object.assign({}, messageBody, { action: ackAction, correlationId: '2' }));
        writeAckService.send(messageBody, () => { });
        writeAckService.send(messageBody, () => { });
    });
    describe('receiving', () => {
        const correlationId = '1';
        let message;
        beforeEach(() => {
            message = {
                topic,
                action,
                name
            };
            writeAckService.send(Object.assign({}, message), callbackSpy);
        });
        it('logs error for unknown acknowledgements', () => __awaiter(this, void 0, void 0, function* () {
            const msg = {
                topic,
                action,
                name,
                correlationId: '123'
            };
            writeAckService.recieve(msg);
            yield BBPromise.delay(1);
            assert.notCalled(callbackSpy);
        }));
        it('calls ack callback when server sends ack message', () => __awaiter(this, void 0, void 0, function* () {
            writeAckService.recieve({
                topic,
                action: RA.WRITE_ACKNOWLEDGEMENT,
                correlationId,
                originalAction: RA.CREATEANDUPDATE_WITH_WRITE_ACK
            });
            yield BBPromise.delay(1);
            assert.calledOnce(callbackSpy);
            assert.calledWith(callbackSpy);
        }));
        it('doesn\'t call callback twice', () => __awaiter(this, void 0, void 0, function* () {
            const msg = {
                topic,
                action: RA.WRITE_ACKNOWLEDGEMENT,
                correlationId,
                originalAction: RA.CREATEANDUPDATE_WITH_WRITE_ACK
            };
            writeAckService.recieve(msg);
            writeAckService.recieve(msg);
            yield BBPromise.delay(1);
            assert.calledOnce(callbackSpy);
            assert.calledWith(callbackSpy);
        }));
        it('calls ack callback with error when server sends error message', () => __awaiter(this, void 0, void 0, function* () {
            const errorAction = RA.MESSAGE_DENIED;
            writeAckService.recieve({
                topic,
                action: errorAction,
                correlationId,
                originalAction: RA.CREATEANDUPDATE_WITH_WRITE_ACK,
                isError: true
            });
            yield BBPromise.delay(1);
            assert.calledOnce(callbackSpy);
            assert.calledWith(callbackSpy, RA[errorAction]);
        }));
    });
});
//# sourceMappingURL=write-acknowledgement-serviceSpec.js.map