/**
 *  Choose the server's state over the client's
 */
export const REMOTE_WINS = (localValue, localVersion, remoteValue, remoteVersion, callback) => {
    callback(null, remoteValue);
};
/**
 *  Choose the local state over the server's
 */
export const LOCAL_WINS = (localValue, localVersion, remoteValue, remoteVersion, callback) => {
    callback(null, localValue);
};
//# sourceMappingURL=merge-strategy.js.map