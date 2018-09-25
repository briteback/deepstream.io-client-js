import { RECORD_ACTIONS } from '../../binary-protocol/src/message-constants';
import { ACTION_TO_WRITE_ACK } from '../../binary-protocol/src/utils';
import { EVENT } from '../constants';
export class WriteAcknowledgementService {
    constructor(services) {
        this.services = services;
        this.responses = new Map();
        this.count = 1;
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Send message with write ack callback.
     */
    send(message, callback) {
        if (this.services.connection.isConnected === false) {
            this.services.timerRegistry.requestIdleCallback(callback.bind(this, EVENT.CLIENT_OFFLINE));
            return;
        }
        const correlationId = this.count.toString();
        this.responses.set(correlationId, callback);
        this.services.connection.sendMessage(Object.assign({}, message, { correlationId, action: ACTION_TO_WRITE_ACK[message.action] }));
        this.count++;
    }
    recieve(message) {
        const id = message.correlationId;
        const response = this.responses.get(id);
        if (!response ||
            (message.action !== RECORD_ACTIONS.WRITE_ACKNOWLEDGEMENT && !message.isError)) {
            return;
        }
        message.isError
            ? response(RECORD_ACTIONS[message.action])
            : response(null);
        this.responses.delete(id);
    }
    onConnectionLost() {
        this.responses.forEach(response => response(EVENT.CLIENT_OFFLINE));
        this.responses.clear();
    }
}
//# sourceMappingURL=write-ack-service.js.map