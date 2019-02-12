import { TOPIC } from "../../binary-protocol/src/message-constants";
import { EVENT } from "../constants";
export class MergeStrategyService {
    constructor(services, defaultStrategy) {
        this.services = services;
        this.defaultStrategy = defaultStrategy;
        this.strategiesByRecord = new Map();
        this.strategiesByPattern = new Map();
    }
    setMergeStrategyByName(recordName, strategy) {
        this.strategiesByRecord.set(recordName, strategy);
    }
    setMergeStrategyByPattern(pattern, strategy) {
        this.strategiesByPattern.set(pattern, strategy);
    }
    merge(recordName, localVersion, localData, remoteVersion, remoteData, callback) {
        const exactMergeStrategy = this.strategiesByRecord.get(recordName);
        if (exactMergeStrategy) {
            exactMergeStrategy(localData, localVersion, remoteData, remoteVersion, (error, data) => {
                callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
            });
            return;
        }
        for (const [pattern, patternMergeStrategy] of this.strategiesByPattern) {
            if (pattern.test(recordName)) {
                patternMergeStrategy(localData, localVersion, remoteData, remoteVersion, (error, data) => {
                    callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
                });
                return;
            }
        }
        if (this.defaultStrategy) {
            this.defaultStrategy(localData, localVersion, remoteData, remoteVersion, (error, data) => {
                callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
            });
        }
        this.services.logger.error({ topic: TOPIC.RECORD }, EVENT.RECORD_VERSION_EXISTS, { remoteVersion, recordName });
    }
}
//# sourceMappingURL=merge-strategy-service.js.map