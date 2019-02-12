import * as C from "../binary-protocol/src/message-constants";
import { Client } from "./client";
import { CONNECTION_STATE, EVENT } from "./constants";
import { LOCAL_WINS, REMOTE_WINS } from "./record/merge-strategy";
const client = (url, options) => {
    return new Client(url, options);
};
export default Object.assign(client, {
    C,
    CONNECTION_STATE,
    EVENT,
    MERGE_STRATEGIES: {
        LOCAL_WINS, REMOTE_WINS,
    },
    deepstream: client,
});
//# sourceMappingURL=deepstream.js.map