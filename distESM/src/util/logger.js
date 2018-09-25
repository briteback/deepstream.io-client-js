import { EVENT } from '../constants';
import { TOPIC, ACTIONS } from '../../binary-protocol/src/message-constants';
function isEvent(action) {
    return EVENT[action] !== undefined;
}
export class Logger {
    constructor(emitter) {
        this.emitter = emitter;
    }
    warn(message, event, meta) {
        // tslint:disable-next-line:no-console
        let warnMessage = `Warning: ${TOPIC[message.topic]}`;
        const action = message.action;
        if (action) {
            warnMessage += ` (${ACTIONS[message.topic][action]})`;
        }
        if (event) {
            warnMessage += `: ${EVENT[event]}`;
        }
        if (meta) {
            warnMessage += ` – ${typeof meta === 'string' ? meta : JSON.stringify(meta)}`;
        }
        console.warn(warnMessage);
    }
    error(message, event, meta) {
        // tslint:disable-next-line:no-console
        if (isEvent(event)) {
            if (event === EVENT.IS_CLOSED) {
                this.emitter.emit('error', meta, EVENT[event], TOPIC[TOPIC.CONNECTION]);
            }
            else if (event === EVENT.CONNECTION_ERROR) {
                this.emitter.emit('error', meta, EVENT[event], TOPIC[TOPIC.CONNECTION]);
            }
        }
        else {
            const action = event ? event : message.action;
            this.emitter.emit('error', meta, ACTIONS[message.topic][action], TOPIC[message.topic]);
        }
    }
}
//# sourceMappingURL=logger.js.map