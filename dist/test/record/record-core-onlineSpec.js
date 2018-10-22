"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disabke:no-unused-expression
const BBPromise = require("bluebird");
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const mocks_1 = require("../mocks");
const message_constants_1 = require("../../binary-protocol/src/message-constants");
const client_options_1 = require("../../src/client-options");
const record_core_1 = require("../../src/record/record-core");
const createMessage = (name, action) => ({
    topic: message_constants_1.TOPIC.RECORD,
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
        whenCompleted = sinon_1.spy();
        services = mocks_1.getServicesMock();
        recordServices = mocks_1.getRecordServices(services);
        options = Object.assign({}, client_options_1.DefaultOptions, { discardTimeout: 20 });
        services.connection.isConnected = true;
        recordCore = new record_core_1.RecordCore(name, services, options, recordServices, whenCompleted);
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.SUBSCRIBECREATEANDREAD,
            name
        });
        recordCore = new record_core_1.RecordCore(name, services, options, recordServices, whenCompleted);
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
        const readySpy = sinon_1.spy();
        recordCore.whenReady(context, readySpy);
        recordServices.readRegistry.recieve(READ_RESPONSE);
        sinon_1.assert.calledOnce(readySpy);
        sinon_1.assert.calledWithExactly(readySpy, context);
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
        chai_1.expect(promiseResult).to.equal(context);
    });
    it('sends update messages for updates after when ready', () => {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.UPDATE,
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.PATCH,
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.UPDATE_WITH_WRITE_ACK,
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.PATCH_WITH_WRITE_ACK,
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.ERASE,
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
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.ERASE_WITH_WRITE_ACK,
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
        chai_1.expect(recordCore.recordState).to.equal(3 /* UNSUBSCRIBING */);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.true;
    });
    it('removes pending discard when usages increases', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.discard();
        recordCore.usages++;
        yield BBPromise.delay(30);
        chai_1.expect(recordCore.recordState).to.equal(2 /* READY */);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.true;
    }));
    it('sends discard when unsubscribe timeout completed', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.discard();
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.UNSUBSCRIBE,
            name
        });
        yield BBPromise.delay(30);
        chai_1.expect(recordCore.recordState).to.equal(4 /* UNSUBSCRIBED */);
        sinon_1.assert.calledOnce(whenCompleted);
        sinon_1.assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.false;
    }));
    it('sends delete when ready', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.DELETE,
            name
        });
        recordCore.delete();
        chai_1.expect(recordCore.recordState).to.equal(5 /* DELETING */);
        sinon_1.assert.notCalled(whenCompleted);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.true;
    }));
    it('calls delete when delete is confirmed', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        services.connectionMock
            .expects('sendMessage')
            .once();
        recordCore.delete();
        recordCore.handle({
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.DELETE_SUCCESS,
            name
        });
        chai_1.expect(recordCore.recordState).to.equal(6 /* DELETED */);
        sinon_1.assert.calledOnce(whenCompleted);
        sinon_1.assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.false;
    }));
    it('calls delete when delete happens remotely', () => __awaiter(this, void 0, void 0, function* () {
        recordServices.readRegistry.recieve(READ_RESPONSE);
        recordCore.handle({
            topic: message_constants_1.TOPIC.RECORD,
            action: message_constants_1.RECORD_ACTIONS.DELETED,
            name
        });
        chai_1.expect(recordCore.recordState).to.equal(6 /* DELETED */);
        sinon_1.assert.calledOnce(whenCompleted);
        sinon_1.assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(recordCore.isReady).to.be.false;
    }));
    it('does not crash on a delete while unsubscribing', () => __awaiter(this, void 0, void 0, function* () {
        services;
        const recordCore = new record_core_1.RecordCore('recordB', services, options, recordServices, whenCompleted);
        const READ = createMessage('recordB', message_constants_1.RECORD_ACTIONS.READ_RESPONSE);
        const DELETED = createMessage('recordB', message_constants_1.RECORD_ACTIONS.DELETED);
        recordServices.readRegistry.recieve(READ);
        chai_1.expect(recordCore.recordState).to.equal(2 /* READY */);
        recordCore.discard();
        chai_1.expect(recordCore.recordState).to.equal(3 /* UNSUBSCRIBING */);
        chai_1.expect(() => recordCore.handle(DELETED)).not.to.throw();
        yield BBPromise.delay(30);
        chai_1.expect(recordCore.isReady).to.be.false;
    }));
});
const name = 'recordA';
const READ_RESPONSE = {
    topic: message_constants_1.TOPIC.RECORD,
    action: message_constants_1.RECORD_ACTIONS.READ_RESPONSE,
    name,
    parsedData: {},
    version: 1
};
//# sourceMappingURL=record-core-onlineSpec.js.map