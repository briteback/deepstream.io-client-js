import { Client } from './client'
import { EVENT, CONNECTION_STATE } from './constants'
import * as C from '../binary-protocol/src/message-constants'
import { LOCAL_WINS, REMOTE_WINS } from './record/merge-strategy'

const client = (url: string, options?: any): Client => {
    return new Client(url, options)
}
export default Object.assign(client, {
    CONNECTION_STATE,
    C,
    EVENT,
    deepstream: client,
    MERGE_STRATEGIES: {
      LOCAL_WINS, REMOTE_WINS
    }
})
