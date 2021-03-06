import { REMOTE_WINS } from "./record/merge-strategy";
export const DefaultOptions = {
    dirtyStorageName: "__ds__dirty_records",
    discardTimeout: 5000,
    heartbeatInterval: 30000,
    lazyConnect: false,
    maxReconnectAttempts: 5,
    maxReconnectInterval: 180000,
    mergeStrategy: REMOTE_WINS,
    messageRewriter: (_) => { },
    nodeStoragePath: "./local-storage",
    nodeStorageSize: 5,
    offlineBufferTimeout: 10000,
    path: "/deepstream",
    reconnectIntervalIncrement: 4000,
    recordDeepCopy: true,
    recordDeleteTimeout: 15000,
    recordReadAckTimeout: 15000,
    recordReadTimeout: 15000,
    rpcAcceptTimeout: 6000,
    rpcResponseTimeout: 10000,
    socketOptions: null,
    subscriptionTimeout: 2000,
};
//# sourceMappingURL=client-options.js.map