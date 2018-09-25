"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const constants_1 = require("./constants");
const C = require("../binary-protocol/src/message-constants");
const merge_strategy_1 = require("./record/merge-strategy");
const client = (url, options) => {
    return new client_1.Client(url, options);
};
exports.default = Object.assign(client, {
    CONNECTION_STATE: constants_1.CONNECTION_STATE,
    C,
    EVENT: constants_1.EVENT,
    deepstream: client,
    MERGE_STRATEGIES: {
        LOCAL_WINS: merge_strategy_1.LOCAL_WINS, REMOTE_WINS: merge_strategy_1.REMOTE_WINS
    }
});
//# sourceMappingURL=deepstream.js.map