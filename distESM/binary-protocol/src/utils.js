import { RECORD_ACTIONS as RA, PRESENCE_ACTIONS as PA, RPC_ACTIONS as RPC, TOPIC } from './message-constants';
export function isWriteAck(action) {
    return action === RA.CREATEANDPATCH_WITH_WRITE_ACK
        || action === RA.CREATEANDUPDATE_WITH_WRITE_ACK
        || action === RA.PATCH_WITH_WRITE_ACK
        || action === RA.UPDATE_WITH_WRITE_ACK
        || action === RA.ERASE_WITH_WRITE_ACK
        || action === RA.WRITE_ACKNOWLEDGEMENT;
}
export const ACTION_TO_WRITE_ACK = {
    [RA.CREATEANDPATCH]: RA.CREATEANDPATCH_WITH_WRITE_ACK,
    [RA.CREATEANDUPDATE]: RA.CREATEANDUPDATE_WITH_WRITE_ACK,
    [RA.PATCH]: RA.PATCH_WITH_WRITE_ACK,
    [RA.UPDATE]: RA.UPDATE_WITH_WRITE_ACK,
    [RA.ERASE]: RA.ERASE_WITH_WRITE_ACK,
};
/**
 * Like reverseMap but the values will be cast using Number(k)
 */
export function reverseMapNumeric(map) {
    const reversedMap = {};
    for (const key in map) {
        reversedMap[map[key]] = Number(key);
    }
    return reversedMap;
}
export const WRITE_ACK_TO_ACTION = reverseMapNumeric(ACTION_TO_WRITE_ACK);
export const RESPONSE_TO_REQUEST = {
    [TOPIC.RECORD]: {
        [RA.HEAD_RESPONSE]: RA.HEAD,
        [RA.READ_RESPONSE]: RA.READ,
        [RA.DELETE_SUCCESS]: RA.DELETE,
    },
    [TOPIC.PRESENCE]: {
        [PA.QUERY_RESPONSE]: PA.QUERY,
        [PA.QUERY_ALL_RESPONSE]: PA.QUERY_ALL
    },
    [TOPIC.RPC]: {
        [RPC.ACCEPT]: RPC.REQUEST,
        [RPC.ERROR]: RPC.REQUEST
    },
    [TOPIC.EVENT]: {}
};
//# sourceMappingURL=utils.js.map