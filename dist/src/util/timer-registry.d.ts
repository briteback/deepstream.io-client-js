export interface ITimeout {
    callback: (...args: any[]) => void;
    duration: number;
    context: any;
    data?: any;
}
export declare class TimerRegistry {
    add(timeout: ITimeout): number;
    remove(timerId: number): boolean;
    requestIdleCallback(callback: (...args: any[]) => void): void;
}
