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
import { RECORD_ACTIONS, TOPIC } from '../../binary-protocol/src/message-constants';
import { SingleNotifier } from '../../src/record/single-notifier';
describe('Single Notifier', () => {
    const timeout = 10;
    const action = RECORD_ACTIONS.READ;
    const name = 'name';
    const topic = TOPIC.RECORD;
    let services;
    let singleNotifier;
    let callbackSpy;
    beforeEach(() => {
        services = getServicesMock();
        singleNotifier = new SingleNotifier(services, action, timeout);
        callbackSpy = spy();
    });
    afterEach(() => {
        services.verify();
    });
    it('requests with correct topic and action', () => {
        const message = {
            topic,
            action,
            name
        };
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs(message);
        services.timeoutRegistryMock
            .expects('add')
            .once()
            .withExactArgs({ message });
        singleNotifier.request(name, callbackSpy);
    });
    it('doesn\'t send message twice and updates the timeout when requesting twice', () => {
        const message = {
            topic,
            action,
            name
        };
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs(message);
        services.timeoutRegistryMock
            .expects('add')
            .once()
            .withExactArgs({ message });
        singleNotifier.request(name, callbackSpy);
        singleNotifier.request(name, callbackSpy);
    });
    it('cant\'t query request when client is offline', () => __awaiter(this, void 0, void 0, function* () {
        services.connection.isConnected = false;
        singleNotifier.request(name, callbackSpy);
        yield BBPromise.delay(1);
        assert.calledOnce(callbackSpy);
        assert.calledWithExactly(callbackSpy, EVENT.CLIENT_OFFLINE);
    }));
    describe('requesting', () => __awaiter(this, void 0, void 0, function* () {
        beforeEach(() => {
            singleNotifier.request(name, callbackSpy);
        });
        it('doesn\'t respond unknown requests', () => __awaiter(this, void 0, void 0, function* () {
            const message = {
                topic,
                action: RECORD_ACTIONS.MESSAGE_DENIED,
                name: 'something',
                isError: true
            };
            singleNotifier.recieve(message, RECORD_ACTIONS[RECORD_ACTIONS.MESSAGE_DENIED], undefined);
            assert.notCalled(callbackSpy);
            yield BBPromise.delay(1);
        }));
        it('responds callback and promise requests with success response', () => __awaiter(this, void 0, void 0, function* () {
            const parsedData = { some: 'data' };
            singleNotifier.recieve({
                topic,
                action,
                name,
                isError: false,
                parsedData
            }, undefined, parsedData);
            assert.calledOnce(callbackSpy);
            assert.calledWithExactly(callbackSpy, undefined, parsedData);
            yield BBPromise.delay(1);
        }));
        it('responds callback and promise requests with error response', () => __awaiter(this, void 0, void 0, function* () {
            singleNotifier.recieve({
                topic,
                action: RECORD_ACTIONS.MESSAGE_DENIED,
                name,
                isError: true
            }, RECORD_ACTIONS[RECORD_ACTIONS.MESSAGE_DENIED], undefined);
            assert.calledOnce(callbackSpy);
            assert.calledWithExactly(callbackSpy, RECORD_ACTIONS[RECORD_ACTIONS.MESSAGE_DENIED], undefined);
            yield BBPromise.delay(1);
        }));
        it('responds with error on connection lost', () => __awaiter(this, void 0, void 0, function* () {
            services.simulateConnectionLost();
            yield BBPromise.delay(1);
            assert.calledOnce(callbackSpy);
            assert.calledWithExactly(callbackSpy, EVENT.CLIENT_OFFLINE);
        }));
    }));
});
//# sourceMappingURL=single-notifierSpec.js.map