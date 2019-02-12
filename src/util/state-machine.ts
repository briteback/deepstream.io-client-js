export class StateMachine {

  private _logger: any;
  private _state: any;
  private _transitions: any;
  private _stateMachine: any;

  constructor(logger: any, stateMachine: any) {
    this._logger = logger;
    this._transitions = stateMachine.transitions;
    this._state = stateMachine.init;
    this._stateMachine = stateMachine;
  }

  /**
   * Try to perform a state change
   */
  public transition(transitionName: any): void {
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

  public get state() {
    return this._state;
  }

  public resetToInitialState() {
    this._state = this._stateMachine.init;
  }

}
