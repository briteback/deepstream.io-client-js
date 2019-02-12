"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StateMachine {
    constructor(logger, stateMachine) {
        this.logger = logger;
        this.transitions = stateMachine.transitions;
        this.currentState = stateMachine.init;
        this.stateMachine = stateMachine;
    }
    /**
     * Try to perform a state change
     */
    transition(transitionName) {
        for (const transition of this.transitions) {
            if (transitionName === transition.name &&
                (this.currentState === transition.from || transition.from === undefined)) {
                const oldState = this.currentState;
                this.currentState = transition.to;
                if (this.stateMachine.onStateChanged) {
                    this.stateMachine.onStateChanged(this.currentState, oldState);
                }
                if (transition.handler) {
                    transition.handler();
                }
                return;
            }
        }
        const details = JSON.stringify({ transition: transitionName, state: this.currentState });
        this.logger.warn(`Invalid state transition: ${details}`);
    }
    get state() {
        return this.currentState;
    }
    resetToInitialState() {
        this.currentState = this.stateMachine.init;
    }
}
exports.StateMachine = StateMachine;
//# sourceMappingURL=state-machine.js.map