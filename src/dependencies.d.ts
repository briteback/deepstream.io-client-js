interface Emitter {
    _callbacks: { [key: string]: Function };
    on(event: string, listener: Function): Emitter;
    once(event: string, listener: Function): Emitter;
    off(event?: string, listener?: Function): Emitter;
    emit(event: string, ...args: any[]): boolean;
    listeners(event: string): Function[];
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
    interface Global {
        WebSocket: WebSocket;
        MozWebSocket: WebSocket;
    }
  }

declare var IN_BROWSER: boolean;
