// tslint:disable-next-line
interface Emitter {
  _callbacks: { [key: string]: (...args: any[]) => void };
  on(event: string, listener: (...args: any[]) => void): Emitter;
  once(event: string, listener: (...args: any[]) => void): Emitter;
  off(event?: string, listener?: (...args: any[]) => void): Emitter;
  emit(event: string, ...args: any[]): boolean;
  listeners(event: string): (...args: any[]) => void[];
  hasListeners(event: string): boolean;
  eventNames(): string[];
}

declare module "component-emitter2" {

  const constructor: {
    (obj?: any): Emitter;
    new (obj?: any): Emitter;
  };

  export = constructor;
}

// tslint:disable-next-line
declare namespace NodeJS  {
  // tslint:disable-next-line
  interface Global {
    WebSocket: WebSocket;
    MozWebSocket: WebSocket;
  }
}

declare var IN_BROWSER: boolean;
