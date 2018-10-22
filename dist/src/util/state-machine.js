"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StateMachine {
    constructor(logger, stateMachine) {
        this._logger = logger;
        this._transitions = stateMachine.transitions;
        this._state = stateMachine.init;
        this._stateMachine = stateMachine;
    }
    /**
     * Try to perform a state change
     */
    transition(transitionName) {
        let transition;
        for (let i = 0; i < this._transitions.length; i++) {
            transition = this._transitions[i];
            if (transitionName === transition.name && (this._state === transition.from || transition.from === undefined)) {
                const oldState = this._state;
                this._state = transition.to;
                if (this._stateMachine.onStateChanged) {
                    this._stateMachine.onStateChanged(this._state, oldState);
                }
                if (transition.handler) {
                    transition.handler();
                }
                return;
            }
        }
        const details = JSON.stringify({ transition: transitionName, state: this._state });
        this._logger.warn(`Invalid state transition: ${details}`);
    }
    get state() {
        return this._state;
    }
}
exports.StateMachine = StateMachine;
//# sourceMappingURL=state-machine.js.map