import * as Emitter from "component-emitter2";
import * as utils from "../util/utils";
export class AnonymousRecord extends Emitter {
    constructor(getRecordCore) {
        super();
        this.record = null;
        this.subscriptions = [];
        this.getRecordCore = getRecordCore;
    }
    get name() {
        if (!this.record) {
            return "";
        }
        return this.record.name;
    }
    get isReady() {
        if (!this.record) {
            return false;
        }
        return this.record.isReady;
    }
    get version() {
        if (!this.record) {
            return -1;
        }
        return this.record.version;
    }
    whenReady(callback) {
        if (this.record) {
            return this.record.whenReady(this, callback);
        }
    }
    setName(recordName, callback) {
        if (this.name === recordName) {
            return;
        }
        this.discard();
        this.record = this.getRecordCore(recordName);
        for (const subscription of this.subscriptions) {
            this.record.subscribe(subscription);
        }
        this.emit("nameChanged", recordName);
        return this.record.whenReady(this, callback);
    }
    get(path) {
        if (this.record) {
            return this.record.get(path);
        }
    }
    set(path, data, callback) {
        if (this.record) {
            return this.record.set(utils.normalizeSetArguments(arguments));
        }
    }
    setWithAck(path, data, callback) {
        if (this.record) {
            return this.record.setWithAck(utils.normalizeSetArguments(arguments));
        }
    }
    erase(path) {
        if (this.record) {
            return this.record.set(utils.normalizeSetArguments(arguments));
        }
    }
    eraseWithAck(path, callback) {
        if (this.record) {
            return this.record.setWithAck(utils.normalizeSetArguments(arguments));
        }
    }
    subscribe(path, callback, triggerNow) {
        const parameters = utils.normalizeArguments(arguments);
        this.subscriptions.push(parameters);
        if (this.record) {
            this.record.subscribe(parameters);
        }
    }
    unsubscribe(path, callback) {
        const parameters = utils.normalizeArguments(arguments);
        this.subscriptions = this.subscriptions.filter((subscription) => {
            return (subscription.path !== parameters.path ||
                subscription.callback !== parameters.callback);
        });
        if (this.record) {
            this.record.unsubscribe(parameters);
        }
    }
    discard() {
        if (this.record) {
            for (const subscription of this.subscriptions) {
                this.record.unsubscribe(subscription);
            }
            return this.record.discard();
        }
    }
    delete(callback) {
        if (this.record) {
            return this.record.delete(callback);
        }
    }
    setMergeStrategy(mergeStrategy) {
        if (this.record) {
            this.record.setMergeStrategy(mergeStrategy);
        }
    }
}
//# sourceMappingURL=anonymous-record.js.map