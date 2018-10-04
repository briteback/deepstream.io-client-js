import { REMOTE_WINS } from './record/merge-strategy';
export const DefaultOptions = {
    heartbeatInterval: 30000,
    reconnectIntervalIncrement: 4000,
    maxReconnectInterval: 180000,
    maxReconnectAttempts: 5,
    rpcAcceptTimeout: 6000,
    rpcResponseTimeout: 10000,
    subscriptionTimeout: 2000,
    recordReadAckTimeout: 15000,
    recordReadTimeout: 15000,
    recordDeleteTimeout: 15000,
    offlineBufferTimeout: 2000,
    discardTimeout: 5000,
    path: '/deepstream',
    mergeStrategy: REMOTE_WINS,
    recordDeepCopy: true,
    socketOptions: null,
    dirtyStorageName: '__ds__dirty_records',
    nodeStoragePath: './local-storage',
    nodeStorageSize: 5,
    lazyConnect: false,
    messageRewriter: (message) => { }
};
//# sourceMappingURL=client-options.js.map