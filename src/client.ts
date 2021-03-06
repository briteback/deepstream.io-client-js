import * as EventEmitter from "component-emitter2";
import { DefaultOptions, IOptions } from "./client-options";
import { AuthenticationCallback, Connection, ResumeCallback } from "./connection/connection";
import { CONNECTION_STATE } from "./constants";
import { EventHandler } from "./event/event-handler";
import { PresenceHandler } from "./presence/presence-handler";
import { RecordHandler } from "./record/record-handler";
import { RPCHandler } from "./rpc/rpc-handler";
import { Logger } from "./util/logger";
import { TimeoutRegistry } from "./util/timeout-registry";
import { TimerRegistry } from "./util/timer-registry";

export type offlineStoreWriteResponse = ((error: string | null) => void);

type DataType = string[] | object | null;
export interface IRecordOfflineStore {
  get: (recordName: string, callback: ((recordName: string, version: number, data: DataType) => void)) => void;
  set: (recordName: string, version: number, data: string[] | object, callback: offlineStoreWriteResponse) => void;
  delete: (recordName: string, callback: offlineStoreWriteResponse) => void;
}

export interface IServices {
  logger: Logger;
  connection: Connection;
  timeoutRegistry: TimeoutRegistry;
  timerRegistry: TimerRegistry;
  emitter: Emitter;
}

export class Client extends EventEmitter {
  public event: EventHandler;
  public rpc: RPCHandler;
  public record: RecordHandler;
  public presence: PresenceHandler;

  private services: IServices;
  private options: IOptions;

  constructor(url: string, options: any = {}) {
    super();
    this.options = Object.assign({}, DefaultOptions, options);
    const services: any = {};
    services.logger = new Logger(this);
    services.timerRegistry = new TimerRegistry();
    services.timeoutRegistry = new TimeoutRegistry(services, this.options);
    services.connection = new Connection(services, this.options, url, this);
    services.emitter = (this as Emitter);
    this.services = services as IServices;

    this.services.connection.onLost(
      services.timeoutRegistry.onConnectionLost.bind(services.timeoutRegistry),
    );

    this.event = new EventHandler(this.services, this.options);
    this.rpc = new RPCHandler(this.services, this.options);
    this.record = new RecordHandler(this.services, this.options);
    this.presence = new PresenceHandler(this.services, this.options);
  }

  public login(details?: object): Promise<object>;
  public login(callback: AuthenticationCallback): void;
  public login(details: object, callback: AuthenticationCallback): void;
  public login(detailsOrCallback?: object | AuthenticationCallback, callback?: AuthenticationCallback):
  void | Promise<object | null> {
    if (detailsOrCallback && typeof detailsOrCallback === "object") {
      if (callback) {
        this.services.connection.authenticate(detailsOrCallback, callback);
      } else {
        return new Promise((resolve, reject) => {
          this.services.connection.authenticate(detailsOrCallback, (success, data) => {
            success ? resolve(data) : reject(data);
          });
        });
      }
    } else {
      if (typeof detailsOrCallback === "function") {
        this.services.connection.authenticate({}, detailsOrCallback);
      } else {
        return new Promise((resolve, reject) => {
          this.services.connection.authenticate({}, (success, data) => {
            success ? resolve(data) : reject(data);
          });
        });
      }
    }
  }

  public getConnectionState(): CONNECTION_STATE {
    return this.services.connection.getConnectionState();
  }

  public close(): void {
    this.services.connection.close();
  }

  public pause(): void {
    this.services.connection.pause();
  }

  public reconnect(): void {
    this.services.connection.forceReconnect();
  }

  public resume(callback?: ResumeCallback): void | Promise<object> {
    if (callback) {
      this.services.connection.resume(callback);
      return;
    }
    return new Promise((resolve, reject) => {
      this.services.connection.resume((error) => {
        error ? reject(error) : resolve();
      });
    });
  }

  /**
   * Returns a random string. The first block of characters
   * is a timestamp, in order to allow databases to optimize for semi-
   * sequentuel numberings
   */
  public getUid(): string {
    const timestamp = (new Date()).getTime().toString(36);
    const randomString = (Math.random() * 10000000000000000).toString(36).replace(".", "");

    return `${timestamp}-${randomString}`;
  }
}
