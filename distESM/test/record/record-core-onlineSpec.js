var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tslint:disabke:no-unused-expression
import * as BBPromise from 'bluebird';
import { expect } from 'chai';
import { spy, assert } from 'sinon';
import { getServicesMock, getRecordServices } from '../mocks';
import { TOPIC, RECORD_ACTIONS as RECORD_ACTION } from '../../binary-protocol/src/message-constants';
import { DefaultOptions } from '../../src/client-options';
import { RecordCore } from '../../src/record/record-core';
const createMessage = (name, action) => ({
    topic: TOPIC.RECORD,
    name,
    action,
    parsedData: {},
    version: 1
});
describe('record core online', () => {
    let whenCompleted;
    let recordCore;
    let options;
    let services;
    let recordServices;
    beforeEach(() => {
        whenCompleted = spy();
        services = getServicesMock();
        recordServices = getRecordServices(services);
        options = Object.assign({}, DefaultOptions, { discardTimeout: 20 });
        services.connection.isConnected = true;
        recordCore = new RecordCore(name, services, options, recordServices, whenCompleted);
        services.connectionMock.restore();
    });
    afterEach(() => {
        services.verify();
    });
    it('sends a subscribe create and read message if online when created', () => {
        services.connection.isConnected = true;
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.SUBSCRIBECREATEANDREAD,
            name
        });
        recordCore = new RecordCore(name, services, options, recordServices, whenCompleted);
    });
    it('doesn`t send updates before ready', () => {
        services.connectionMock
            .expects('sendMessage')
            .never();
        recordCore.set({ data: { firstname: 'Wolfram' } });
    });
    it('doesn`t send patches before ready', () => {
        services.connectionMock
            .expects('sendMessage')
            .never();
        recordCore.set({ path: 'firstname', data: 'Wolfram' });
    });
    it('triggers ready callback on read response', () => {
        const context = null;
        const readySpy = spy();
        recordCore.whenReady(context, readySpy);
        recordServices.readRegistry.recieve(READ_RESPONSE);
        assert.calledOnce(readySpy);
        assert.calledWithExactly(readySpy, context);
    });
    it.skip('triggers ready promise on read response', () => {
        let promiseResult = null;
        const context = { ola: 1 };
        const promise = recordCore.whenReady(null);
        if (promise) {
            promise.then(result => {
                promiseResult = result;
            });
        }
        recordCore.handle(READ_RESPONSE);
        expect(promiseResult).to.equal(context);
    });
    it('sends update messages for updates after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.UPDATE,
            name,
            parsedData: { firstname: 'Bob' },
            version: 2
        });
        recordCore.set({ data: { firstname: 'Bob' } });
    });
    it('sends patch messages for path changes after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.PATCH,
            name,
            path: 'firstname',
            parsedData: 'Bob',
            version: 2
        });
        recordCore.set({ path: 'firstname', data: 'Bob' });
    });
    it('sends update messages for updates write ack after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.UPDATE_WITH_WRITE_ACK,
            name,
            parsedData: { firstname: 'Bob' },
            correlationId: '1',
            version: 2
        });
        recordCore.set({ data: { firstname: 'Bob' }, callback: () => { } });
    });
    it('sends patch messages for path changes after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.PATCH_WITH_WRITE_ACK,
            name,
            path: 'firstname',
            parsedData: 'Bob',
            correlationId: '1',
            version: 2
        });
        recordCore.set({ path: 'firstname', data: 'Bob', callback: () => { } });
    });
    it('sends erase messages for erase after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.ERASE,
            name,
            path: 'firstname',
            version: 2
        });
        recordCore.set({ path: 'firstname' });
    });
    it('sends erase write ack messages for erase after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.ERASE_WITH_WRITE_ACK,
            name,
            path: 'firstname',
            correlationId: '1',
            version: 2
        });
        recordCore.set({ path: 'firstname', callback: () => { } });
    });
    it('queues discarding record when no longer needed', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.discard();
        expect(recordCore.recordState).to.equal(3 /* UNSUBSCRIBING */);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    });
    it('removes pending discard when usages increases', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.discard();
        recordCore.usages++;
        yield BBPromise.delay(30);
        expect(recordCore.recordState).to.equal(2 /* READY */);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    }));
    it('sends discard when unsubscribe timeout completed', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.discard();
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.UNSUBSCRIBE,
            name
        });
        yield BBPromise.delay(30);
        expect(recordCore.recordState).to.equal(4 /* UNSUBSCRIBED */);
        assert.calledOnce(whenCompleted);
        assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.false;
    }));
    it('sends delete when ready', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.DELETE,
            name
        });
        recordCore.delete();
        expect(recordCore.recordState).to.equal(5 /* DELETING */);
        assert.notCalled(whenCompleted);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    }));
    it('calls delete when delete is confirmed', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once();
        recordCore.delete();
        recordCore.handle({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.DELETE_SUCCESS,
            name
        });
        expect(recordCore.recordState).to.equal(6 /* DELETED */);
        assert.calledOnce(whenCompleted);
        assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.false;
    }));
    it('calls delete when delete happens remotely', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.handle({
            topic: TOPIC.RECORD,
            action: RECORD_ACTION.DELETED,
            name
        });
        expect(recordCore.recordState).to.equal(6 /* DELETED */);
        assert.calledOnce(whenCompleted);
        assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.false;
    }));
    it('does not crash on a delete while unsubscribing', () => __awaiter(this, void 0, void 0, function* () {
        services;
        const recordCore = new RecordCore('recordB', services, options, recordServices, whenCompleted);
        const READ = createMessage('recordB', RECORD_ACTION.READ_RESPONSE);
        const DELETED = createMessage('recordB', RECORD_ACTION.DELETED);
        recordServices.readRegistry.recieve(READ);
        expect(recordCore.recordState).to.equal(2 /* READY */);
        recordCore.discard();
        expect(recordCore.recordState).to.equal(3 /* UNSUBSCRIBING */);
        expect(() => recordCore.handle(DELETED)).not.to.throw();
        yield BBPromise.delay(30);
        expect(recordCore.isReady).to.be.false;
    }));
});
const name = 'recordA';
const READ_RESPONSE = {
    topic: TOPIC.RECORD,
    action: RECORD_ACTION.READ_RESPONSE,
    name,
    parsedData: {},
    version: 1
};
//# sourceMappingURL=record-core-onlineSpec.js.map