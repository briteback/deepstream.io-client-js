export declare class StateMachine {
    private logger;
    private currentState;
    private transitions;
    private stateMachine;
    constructor(logger: any, stateMachine: any);
    /**
     * Try to perform a state change
     */
    transition(transitionName: any): void;
    readonly state: any;
    resetToInitialState(): void;
}
