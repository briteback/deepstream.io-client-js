export interface ITimeout {
  callback: (...args: any[]) => void;
  duration: number;
  context: any;
  data?: any;
}

export class TimerRegistry {

  public add(timeout: ITimeout): number {
    return setTimeout(
      timeout.callback.bind(timeout.context, timeout.data),
      timeout.duration,
    );
  }

  public remove(timerId: number): boolean {
    clearTimeout(timerId);
    return true;
  }

  public requestIdleCallback(callback: (...args: any[]) => void): void {
    Promise.resolve().then(() => callback());
  }

}
