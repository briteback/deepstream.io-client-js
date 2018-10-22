export declare class StateMachine {
    private _state;
    private _transitions;
    private _stateMachine;
    constructor(logger: any, stateMachine: any);
    /**
     * Try to perform a state change
     */
    transition(transitionName: any): void;
    readonly state: any;
}
