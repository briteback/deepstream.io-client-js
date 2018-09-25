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
import { spy, assert, match } from 'sinon';
import { getServicesMock, getRecordServices } from '../mocks';
import { EVENT } from '../../src/constants';
import { DefaultOptions } from '../../src/client-options';
import { RecordCore } from '../../src/record/record-core';
describe('record core offline', () => {
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
        services.connectionMock
            .expects('sendMessage')
            .never();
        services.storageMock
            .expects('get')
            .once()
            .callsArgWith(1, name, 1, { firstname: 'wolfram' });
        services.connection.isConnected = false;
        recordCore = new RecordCore(name, services, options, recordServices, whenCompleted);
    });
    afterEach(() => {
        services.verify();
        recordServices.verify();
    });
    it('triggers ready callback on load', () => {
        const readySpy = spy();
        recordCore.whenReady(null, readySpy);
        assert.calledOnce(readySpy);
        assert.calledWithExactly(readySpy, null);
    });
    it('sets update messages for updates after when ready', () => {
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, { firstname: 'Bob' }, match.func);
        recordCore.set({ data: { firstname: 'Bob' } });
    });
    it('sends patch messages for path changes after when ready', () => {
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, { firstname: 'Bob' }, match.func);
        recordCore.set({ path: 'firstname', data: 'Bob' });
    });
    it('responds to update write acks with an offline error', () => __awaiter(this, void 0, void 0, function* () {
        const ackCallback = spy();
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, { firstname: 'Bob' }, match.func);
        recordCore.set({ data: { firstname: 'Bob' }, callback: ackCallback });
        yield BBPromise.delay(0);
        assert.calledOnce(ackCallback);
        assert.calledWithExactly(ackCallback, EVENT.CLIENT_OFFLINE, name);
    }));
    it('sends patch messages for path changes after when ready', () => __awaiter(this, void 0, void 0, function* () {
        const ackCallback = spy();
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, { firstname: 'Bob' }, match.func);
        recordCore.set({ path: 'firstname', data: 'Bob', callback: ackCallback });
        yield BBPromise.delay(0);
        assert.calledOnce(ackCallback);
        assert.calledWithExactly(ackCallback, EVENT.CLIENT_OFFLINE, name);
    }));
    it('sends erase messages for erase after when ready', () => {
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, {}, match.func);
        recordCore.set({ path: 'firstname' });
    });
    it('sends erase write ack messages for erase after when ready', () => __awaiter(this, void 0, void 0, function* () {
        const ackCallback = spy();
        services.storageMock
            .expects('set')
            .once()
            .withExactArgs(name, 2, {}, match.func);
        recordCore.set({ path: 'firstname', callback: ackCallback });
        yield BBPromise.delay(0);
        assert.calledOnce(ackCallback);
        assert.calledWithExactly(ackCallback, EVENT.CLIENT_OFFLINE, name);
    }));
    it('queues discarding record when no longer needed', () => {
        recordCore.discard();
        expect(recordCore.recordState).to.equal(6 /* UNSUBSCRIBING */);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    });
    it('removes pending discard when usages increases', () => __awaiter(this, void 0, void 0, function* () {
        recordCore.discard();
        recordCore.usages++;
        yield BBPromise.delay(30);
        expect(recordCore.recordState).to.equal(4 /* READY */);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    }));
    it('removes record when completed', () => __awaiter(this, void 0, void 0, function* () {
        recordCore.discard();
        yield BBPromise.delay(30);
        expect(recordCore.recordState).to.equal(7 /* UNSUBSCRIBED */);
        assert.calledOnce(whenCompleted);
        assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.false;
    }));
    it.skip('sends delete when ready', () => __awaiter(this, void 0, void 0, function* () {
        services.storageMock
            .expects('delete')
            .once()
            .withExactArgs(name, match.func);
        recordCore.delete();
        expect(recordCore.recordState).to.equal(8 /* DELETING */);
        assert.notCalled(whenCompleted);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.true;
    }));
    it.skip('calls delete when delete is confirmed', () => __awaiter(this, void 0, void 0, function* () {
        services.storageMock
            .expects('delete')
            .once()
            .withExactArgs(name, match.func)
            .callsArgWith(1, name);
        recordCore.delete();
        yield BBPromise.delay(0);
        // deleted
        expect(recordCore.recordState).to.equal(9 /* DELETED */);
        assert.calledOnce(whenCompleted);
        assert.calledWithExactly(whenCompleted, name);
        // tslint:disable-next-line:no-unused-expression
        expect(recordCore.isReady).to.be.false;
    }));
    const name = 'recordA';
});
//# sourceMappingURL=record-core-offlineSpec.js.map