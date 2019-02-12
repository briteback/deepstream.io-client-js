export class StateMachine {

  private logger: any;
  private currentState: any;
  private transitions: any;
  private stateMachine: any;

  constructor(logger: any, stateMachine: any) {
    this.logger = logger;
    this.transitions = stateMachine.transitions;
    this.currentState = stateMachine.init;
    this.stateMachine = stateMachine;
  }

  /**
   * Try to perform a state change
   */
  public transition(transitionName: any): void {
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

  public get state() {
    return this.currentState;
  }

  public resetToInitialState() {
    this.currentState = this.stateMachine.init;
  }

}
