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
import { spy, assert, match } from 'sinon';
import { getServicesMock, getRecordServices } from '../mocks';
import { TOPIC, RECORD_ACTIONS as RECORD_ACTION } from '../../binary-protocol/src/message-constants';
import { DefaultOptions } from '../../src/client-options';
import { RecordHandler } from '../../src/record/record-handler';
describe('record setData online', () => {
    const topic = TOPIC.RECORD;
    const name = 'testRecord';
    let recordHandler;
    let options;
    let services;
    let recordServices;
    let handle;
    beforeEach(() => {
        services = getServicesMock();
        recordServices = getRecordServices(services);
        options = Object.assign({}, DefaultOptions);
        services.connection.isConnected = true;
        recordHandler = new RecordHandler(services, options, recordServices);
        handle = services.getHandle();
    });
    afterEach(() => {
        services.verify();
        recordServices.verify();
    });
    it('sends update messages for entire data changes', () => {
        const data = { firstname: 'Wolfram' };
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic,
            action: RECORD_ACTION.CREATEANDUPDATE,
            name,
            path: undefined,
            parsedData: data,
            version: -1
        });
        recordHandler.setData(name, data);
    });
    it('sends update messages for path changes ', () => {
        const path = 'lastName';
        const data = 'Hempel';
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic,
            action: RECORD_ACTION.CREATEANDPATCH,
            name,
            path,
            parsedData: data,
            version: -1
        });
        recordHandler.setData(name, path, data);
    });
    it('deletes value when sending undefined for a path', () => {
        const path = 'lastName';
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic,
            action: RECORD_ACTION.ERASE,
            name,
            path,
            version: -1,
            parsedData: undefined
        });
        recordHandler.setData(name, path, undefined);
    });
    it.skip('updates existent local record', () => {
    });
    it('throws error for invalid arguments', () => {
        expect(recordHandler.setData.bind(recordHandler)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name)).to.throw();
        const data = { some: 'data' };
        expect(recordHandler.setData.bind(recordHandler, undefined, data)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, null, data)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, 123, data)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, {}, data)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, undefined)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, undefined, () => { })).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, null)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, null, () => { })).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, '', 'data')).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, 'Some String')).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, 100.24)).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, {}, { not: 'func' })).to.throw();
        expect(recordHandler.setData.bind(recordHandler, name, 'path', 'val', { not: 'func' })).to.throw();
    });
    describe('with ack', () => {
        let data;
        let path;
        let cb;
        beforeEach(() => {
            path = 'key';
            data = { some: 'value' };
            cb = () => { };
        });
        it('sends update messages for entire data changes with ack callback', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.CREATEANDUPDATE,
                name,
                path: undefined,
                parsedData: data,
                version: -1,
            }, cb);
            recordHandler.setData(name, data, cb);
        });
        it('sends update messages for path changes with ack callback', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.CREATEANDPATCH,
                name,
                path,
                parsedData: data,
                version: -1
            }, cb);
            recordHandler.setData(name, path, data, cb);
        });
        it('sends update messages for entire data changes with ack promise', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.CREATEANDUPDATE,
                name,
                path: undefined,
                parsedData: data,
                version: -1
            }, match.func);
            const promise = recordHandler.setDataWithAck(name, data);
            expect(promise).is.a('promise');
        });
        it('sends update messages for path changes with ack promise', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.CREATEANDPATCH,
                name,
                path,
                parsedData: data,
                version: -1
            }, match.func);
            const promise = recordHandler.setDataWithAck(name, path, data);
            expect(promise).is.a('promise');
        });
        it('deletes value when sending undefined for a path with ack callback', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.ERASE,
                name,
                path,
                version: -1,
                parsedData: undefined
            }, cb);
            recordHandler.setDataWithAck(name, path, undefined, cb);
        });
        it('deletes value when sending undefined for a path with ack promise', () => {
            recordServices.writeAckServiceMock
                .expects('send')
                .once()
                .withExactArgs({
                topic,
                action: RECORD_ACTION.ERASE,
                name,
                path,
                version: -1,
                parsedData: undefined
            }, match.func);
            const promise = recordHandler.setDataWithAck(name, path, undefined);
            expect(promise).is.a('promise');
        });
    });
    describe('handling acknowledgements', () => {
        const path = 'key';
        const data = { some: 'value' };
        let ackCallback;
        let ackResolve;
        let ackReject;
        beforeEach(() => {
            ackCallback = spy();
            ackResolve = spy();
            ackReject = spy();
        });
        const errorMsg = {
            topic,
            action: RECORD_ACTION.MESSAGE_DENIED,
            originalAction: RECORD_ACTION.CREATEANDUPDATE_WITH_WRITE_ACK,
            name,
            correlationId: '1',
            isError: true,
            isWriteAck: true
        };
        it('calls callbackAck with error', () => __awaiter(this, void 0, void 0, function* () {
            recordHandler.setDataWithAck(name, data, ackCallback);
            handle(errorMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackCallback);
            assert.calledWithExactly(ackCallback, RECORD_ACTION[errorMsg.action]);
        }));
        it('rejects promise with error', () => __awaiter(this, void 0, void 0, function* () {
            const promise = recordHandler.setDataWithAck(name, path, undefined);
            promise.then(ackResolve).catch(ackReject);
            handle(errorMsg);
            yield BBPromise.delay(1);
            assert.notCalled(ackResolve);
            assert.calledOnce(ackReject);
            assert.calledWithExactly(ackReject, RECORD_ACTION[errorMsg.action]);
        }));
        const createUpdateAckMsg = {
            topic,
            action: RECORD_ACTION.WRITE_ACKNOWLEDGEMENT,
            originalAction: RECORD_ACTION.CREATEANDUPDATE_WITH_WRITE_ACK,
            name,
            correlationId: '1',
            isWriteAck: true
        };
        it('calls callbackAck for setData without path', () => __awaiter(this, void 0, void 0, function* () {
            recordHandler.setDataWithAck(name, data, ackCallback);
            handle(createUpdateAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackCallback);
            assert.calledWithExactly(ackCallback, null);
        }));
        it('resolves promise for setData without path', () => __awaiter(this, void 0, void 0, function* () {
            const promise = recordHandler.setDataWithAck(name, data);
            promise.then(ackResolve).catch(ackReject);
            handle(createUpdateAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackResolve);
            assert.notCalled(ackReject);
        }));
        const createPatchAckMsg = {
            topic,
            action: RECORD_ACTION.WRITE_ACKNOWLEDGEMENT,
            originalAction: RECORD_ACTION.CREATEANDPATCH_WITH_WRITE_ACK,
            name,
            correlationId: '1',
            isWriteAck: true
        };
        it('calls callbackAck for setData with path', () => __awaiter(this, void 0, void 0, function* () {
            recordHandler.setDataWithAck(name, path, data, ackCallback);
            handle(createPatchAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackCallback);
            assert.calledWithExactly(ackCallback, null);
        }));
        it('resolves promise for setData with path', () => __awaiter(this, void 0, void 0, function* () {
            const promise = recordHandler.setDataWithAck(name, path, data);
            promise.then(ackResolve).catch(ackReject);
            handle(createPatchAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackResolve);
            assert.notCalled(ackReject);
        }));
        const eraseAckMsg = {
            topic,
            action: RECORD_ACTION.WRITE_ACKNOWLEDGEMENT,
            originalAction: RECORD_ACTION.ERASE_WITH_WRITE_ACK,
            name,
            correlationId: '1',
            isWriteAck: true
        };
        it('calls callbackAck for setData deleting values', () => __awaiter(this, void 0, void 0, function* () {
            recordHandler.setDataWithAck(name, path, undefined, ackCallback);
            handle(eraseAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackCallback);
            assert.calledWithExactly(ackCallback, null);
        }));
        it('resolves promise for setData deleting values', () => __awaiter(this, void 0, void 0, function* () {
            const promise = recordHandler.setDataWithAck(name, path, undefined);
            promise.then(ackResolve).catch(ackReject);
            handle(eraseAckMsg);
            yield BBPromise.delay(1);
            assert.calledOnce(ackResolve);
            assert.notCalled(ackReject);
        }));
    });
});
//# sourceMappingURL=record-setData-onlineSpec.js.map