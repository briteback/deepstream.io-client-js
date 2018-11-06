import { Services } from '../client'
import { Options } from '../client-options'
import { EVENT } from '../constants'
import { TOPIC, RECORD_ACTIONS as RA, RecordMessage, RecordWriteMessage } from '../../binary-protocol/src/message-constants'
import { RecordServices } from './record-handler'
import { get as getPath, setValue as setPath } from './json-path'
import * as Emitter from 'component-emitter2'
import * as utils from '../util/utils'
import { StateMachine } from '../util/state-machine'
import { Record } from './record'
import { AnonymousRecord } from './anonymous-record'
import { List } from './list'
import { MergeStrategy } from './merge-strategy'

export type WriteAckCallback = (error: string | null, recordName: string) => void

export const enum RECORD_STATE {
  INITIAL,
  SUBSCRIBING,
  READY,
  UNSUBSCRIBING,
  UNSUBSCRIBED,
  DELETING,
  DELETED
}

export class RecordCore extends Emitter {
  public name: string
  public isReady: boolean
  public hasProvider: boolean
  public version: number | null

  private references: number
  private services: Services
  private options: Options
  private recordServices: RecordServices
  private emitter: Emitter
  private parentEmitter: Emitter
  private data: object
  private stateMachine: StateMachine
  private responseTimeout: number
  private discardTimeout: number
  private deletedTimeout: number
  private deleteResponse: {
    callback?: (error: string | null) => void,
    reject?: (error: string) => void,
    resolve?: () => void
  }
  private whenComplete: (recordName: string) => void
  private pendingWrites: Array<any>

  constructor(name: string, services: Services,
    options: Options, recordServices: RecordServices,
    whenComplete: (recordName: string) => void) {
    super()
    this.services = services
    this.options = options
    this.recordServices = recordServices
    this.emitter = new Emitter()
    this.data = Object.create(null)
    this.name = name
    this.whenComplete = whenComplete
    this.references = 1
    this.hasProvider = false
    this.pendingWrites = []
    this.isReady = false
    this.parentEmitter = services.emitter

    this.version = null
    this.responseTimeout = -1
    this.discardTimeout = -1
    this.deletedTimeout = -1
    this.deleteResponse = {}

    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('invalid argument name')
    }

    const [
      onSubscribing, onReady, onDeleted, onUnsubscribed
    ] = [
      this.onSubscribing, this.onReady, this.onDeleted, this.onUnsubscribed
    ].map(f => f.bind(this))

    const transitions = [
      {
        name: RA.SUBSCRIBE,
        from: RECORD_STATE.INITIAL, to: RECORD_STATE.SUBSCRIBING,
        handler: onSubscribing
      },
      {
        name: RA.READ_RESPONSE,
        from: RECORD_STATE.SUBSCRIBING, to: RECORD_STATE.READY,
        handler: onReady
      },
      {
        name: RA.DELETE,
        from: RECORD_STATE.READY, to: RECORD_STATE.DELETING
      },
      {
        name: RA.DELETED,
        from: RECORD_STATE.READY, to: RECORD_STATE.DELETED,
        handler: onDeleted
      },
      {
        name: RA.DELETE_SUCCESS,
        from: RECORD_STATE.DELETING, to: RECORD_STATE.DELETED,
        handler: onDeleted
      },
      {
        name: RA.UNSUBSCRIBE,
        from: RECORD_STATE.READY, to: RECORD_STATE.UNSUBSCRIBING
      },
      // Ignore unsubscribes while in the unsubscribing state.
      {
        name: RA.UNSUBSCRIBE,
        from: RECORD_STATE.UNSUBSCRIBING, to: RECORD_STATE.UNSUBSCRIBING
      },
      {
        name: RA.SUBSCRIBE,
        from: RECORD_STATE.UNSUBSCRIBING, to: RECORD_STATE.READY
      },
      {
        name: RA.UNSUBSCRIBE_ACK,
        from: RECORD_STATE.UNSUBSCRIBING, to: RECORD_STATE.UNSUBSCRIBED,
        handler: onUnsubscribed
      },
    ]
    const onStateChanged = (newState: string, oldState: string) => {
      this.emitter.emit(EVENT.RECORD_STATE_CHANGED, newState)
    }
    const stateMachine = { init: RECORD_STATE.INITIAL, onStateChanged, transitions }
    this.stateMachine = new StateMachine(this.services.logger, stateMachine)

    this.handleReadResponse = this.handleReadResponse.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)
    this.stateMachine.transition(RA.SUBSCRIBE)
  }

  get recordState(): RECORD_STATE {
    return this.stateMachine.state
  }

  set usages(usages: number) {
    this.references = usages
    if (this.references === 1) {
      this.services.timerRegistry.remove(this.discardTimeout)
      this.stateMachine.transition(RA.SUBSCRIBE)
    }
  }

  get usages(): number {
    return this.references
  }

  /**
   * Convenience method, similar to promises. Executes callback
   * whenever the record is ready, either immediatly or once the ready
   * event is fired
   * @param   {[Function]} callback Will be called when the record is ready
   */
  public whenReady(context: null | List | Record | AnonymousRecord,
    callback?: (context: any) => void): Promise<any> | void {
    switch (true) {
      case this.isReady && !!callback:
        callback!(context)
        return

      case this.isReady && !callback:
        return Promise.resolve(context)

      case !this.isReady && !!callback:
        this.once(EVENT.RECORD_READY, () => callback!(context))
        return

      case !this.isReady && !callback:
        return new Promise((resolve, reject) => {
          this.once(EVENT.RECORD_READY, () => resolve(context))
        })
    }
  }

  /**
   * Sets the value of either the entire dataset
   * or of a specific path within the record
   * and submits the changes to the server
   *
   * If the new data is equal to the current data, nothing will happen
   *
   * @param {[String|Object]} pathOrData Either a JSON path when called with
   *                                     two arguments or the data itself
   * @param {Object} data     The data that should be stored in the record
   */
  public set({ path, data, callback }: utils.RecordSetArguments): void {
    if (!path && (data === null || typeof data !== 'object')) {
      throw new Error('invalid arguments, scalar values cannot be set without path')
    }

    if (!this.isReady || !this.services.connection.isConnected) {
      this.pendingWrites.push({ path, data, callback })
      return
    }

    const oldValue = this.data
    const newValue = setPath(oldValue, path || null, data)

    if (oldValue === newValue) {
      if (callback) {
        this.services.timerRegistry.requestIdleCallback(() => callback(null, this.name))
      }
      return
    }

    this.applyChange(newValue)
    this.sendUpdate(path, data, callback)
  }

  /**
   * Wrapper function around the record.set that returns a promise
   * if no callback is supplied.
   * @returns {Promise} if a callback is omitted a Promise is returned with the result of the write
   */
  public setWithAck(args: utils.RecordSetArguments): Promise<void> | void {
    if (args.callback) {
      this.set(args)
      return
    }

    return new Promise((resolve, reject) => {
      args.callback = error => error === null ? resolve() : reject(error)
      this.set(args)
    })
  }

  /**
   * Returns a copy of either the entire dataset of the record
   * or - if called with a path - the value of that path within
   * the record's dataset.
   *
   * Returning a copy rather than the actual value helps to prevent
   * the record getting out of sync due to unintentional changes to
   * its data
   */
  public get(path?: string): any {
    return getPath(this.data, path || null, this.options.recordDeepCopy)
  }

  /**
   * Subscribes to changes to the records dataset.
   *
   * Callback is the only mandatory argument.
   *
   * When called with a path, it will only subscribe to updates
   * to that path, rather than the entire record
   *
   * If called with true for triggerNow, the callback will
   * be called immediatly with the current value
   */
  public subscribe(args: utils.RecordSubscribeArguments) {
    if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
      throw new Error('invalid argument path')
    }
    if (typeof args.callback !== 'function') {
      throw new Error('invalid argument callback')
    }

    if (args.triggerNow) {
      this.whenReady(null, () => {
        this.emitter.on(args.path || '', args.callback)
        args.callback(this.get(args.path))
      })
    } else {
      this.emitter.on(args.path || '', args.callback)
    }
  }

  /**
   * Removes a subscription that was previously made using record.subscribe()
   *
   * Can be called with a path to remove the callback for this specific
   * path or only with a callback which removes it from the generic subscriptions
   *
   * Please Note: unsubscribe is a purely client side operation. If the app is no longer
   * interested in receiving updates for this record from the server it needs to call
   * discard instead
   *
   * @param   {String}           path  A JSON path
   * @param   {Function}         callback     The callback method. Please note, if a bound
   *                                          method was passed to subscribe, the same method
   *                                          must be passed to unsubscribe as well.
   */
  public unsubscribe(args: utils.RecordSubscribeArguments) {
    if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
      throw new Error('invalid argument path')
    }
    if (args.callback !== undefined && typeof args.callback !== 'function') {
      throw new Error('invalid argument callback')
    }

    this.emitter.off(args.path || '', args.callback)
  }

  /**
   * Removes all change listeners and notifies the server that the client is
   * no longer interested in updates for this record
   */
  public discard(): void {
    this.whenReady(null, () => {
      this.references--
      if (this.references <= 0) {
        this.discardTimeout = this.services.timerRegistry.add({
          duration: this.options.discardTimeout,
          callback: this.stateMachine.transition,
          context: this.stateMachine,
          data: RA.UNSUBSCRIBE_ACK
        })

      }
    })
    this.stateMachine.transition(RA.UNSUBSCRIBE)
  }

  /**
   * Deletes the record on the server.
   */
  public delete(callback?: (error: string | null) => void): Promise<void> | void {
    if (!this.services.connection.isConnected) {
      // this.services.logger.warn({ topic: TOPIC.RECORD }, RA.DELETE, 'Deleting while offline is not supported')
      if (callback) {
        this.services.timerRegistry.requestIdleCallback(() => {
          callback('Deleting while offline is not supported')
        })
        return
      }
      return Promise.reject('Deleting while offline is not supported')
    }

    this.stateMachine.transition(RA.DELETE)

    if (callback && typeof callback === 'function') {
      this.deleteResponse = { callback }
      this.sendDelete()
    } else {
      return new Promise((resolve: () => void, reject: (error: string) => void) => {
        this.deleteResponse = { resolve, reject }
        this.sendDelete()
      })
    }
  }

  /**
   * Set a merge strategy to resolve any merge conflicts that may occur due to
   * write conflicts. The function will be called with the local record, the
   * remote version/data and a callback to call once the merge has completed or
   * if an error occurs ( which leaves it in an inconsistent state until the
   * next update merge attempt ).
   */
  public setMergeStrategy(mergeStrategy: MergeStrategy): void {
    this.recordServices.mergeStrategy.setMergeStrategyByName(this.name, mergeStrategy)
  }

  public saveRecordLocally(): void {
    this.services.storage.set(this.name, this.version as number, this.data, () => { })
  }

  /**
   * Transition States
   */
  private onSubscribing(): void {
    this.recordServices.readRegistry.register(this.name, this.handleReadResponse.bind(this))
    this.parentEmitter.on(EVENT.CONNECTION_REESTABLISHED, () => {
      this.services.connection.sendMessage({
        topic: TOPIC.RECORD,
        action: RA.SUBSCRIBECREATEANDREAD,
        name: this.name
      })
    })
    this.services.timeoutRegistry.add({
      message: {
        topic: TOPIC.RECORD,
        action: RA.SUBSCRIBE,
        name: this.name,
      }
    })
    this.responseTimeout = this.services.timeoutRegistry.add({
      message: {
        topic: TOPIC.RECORD,
        action: RA.READ_RESPONSE,
        name: this.name
      }
    })

    this.services.connection.sendMessage({
      topic: TOPIC.RECORD,
      action: RA.SUBSCRIBECREATEANDREAD,
      name: this.name
    })
  }

  private onReady(): void {
    this.services.timeoutRegistry.clear(this.responseTimeout)
    this.applyPendingWrites()
    this.isReady = true
    this.emit(EVENT.RECORD_READY)
  }

  private applyPendingWrites(): void {
    const writeCallbacks: Array<WriteAckCallback> = []
    const oldData = this.data
    let newData = oldData
    for (let i = 0; i < this.pendingWrites.length; i++) {
      const { callback, path, data } = this.pendingWrites[i]
      if (callback) {
        writeCallbacks.push(callback)
      }
      newData = setPath(newData, path || null, data)
    }
    this.pendingWrites = []
    this.applyChange(newData)

    const runFns = (err: any) => {
      for (let i = 0; i < writeCallbacks.length; i++) {
        writeCallbacks[i](err, this.name)
      }
    }

    if (utils.deepEquals(oldData, newData)) {
      runFns(null)
      return
    }

    // Assume we are connected, otherwise we would not be in a ready state.
    this.sendUpdate(null, newData, runFns)
  }

  /// Handlers for received record messages ///

  private onUnsubscribed(): void {
    if (this.services.connection.isConnected) {
      const message = {
        topic: TOPIC.RECORD,
        action: RA.UNSUBSCRIBE,
        name: this.name
      }
      this.discardTimeout = this.services.timeoutRegistry.add({ message })
      this.services.connection.sendMessage(message)
    }
    this.emit(EVENT.RECORD_DISCARDED)
    this.destroy()
  }

  private onDeleted(): void {
    this.emit(EVENT.RECORD_DELETED)
    this.destroy()
  }

  private handleAckMessage(message: RecordMessage): void {
    this.services.timeoutRegistry.remove(message)
  }

  private handleUpdateMessage(message: RecordMessage): void {
    this.applyUpdate(message as RecordWriteMessage)
  }

  private handleDeleteSuccess(): void {
    this.services.timeoutRegistry.clear(this.deletedTimeout)
    this.stateMachine.transition(RA.DELETE_SUCCESS)
    if (this.deleteResponse.callback) {
      this.deleteResponse.callback(null)
    } else if (this.deleteResponse.resolve) {
      this.deleteResponse.resolve()
    }
  }

  private handleDeleted(): void {
    this.stateMachine.transition(RA.DELETED)
  }

  private handleMessageDenied(message: RecordMessage): void {
    const isSubscribeMessage = (
      message.originalAction === RA.SUBSCRIBECREATEANDREAD ||
        message.originalAction === RA.SUBSCRIBEANDHEAD ||
        message.originalAction === RA.SUBSCRIBEANDREAD
    )

    if (isSubscribeMessage) {
      const subscribeMsg = Object.assign({}, message, { originalAction: RA.SUBSCRIBE })
      const actionMsg = Object.assign(
        {},
        message,
        { originalAction: message.originalAction === RA.SUBSCRIBECREATEANDREAD ? RA.READ_RESPONSE : RA.HEAD_RESPONSE }
      )
      this.services.timeoutRegistry.remove(subscribeMsg)
      this.services.timeoutRegistry.remove(actionMsg)
    }

    this.emit(EVENT.RECORD_ERROR, RA[RA.MESSAGE_DENIED], RA[message.originalAction as number])

    if (message.originalAction === RA.DELETE) {
      if (this.deleteResponse.callback) {
        this.deleteResponse.callback(RA[RA.MESSAGE_DENIED])
      } else if (this.deleteResponse.reject) {
        this.deleteResponse.reject(RA[RA.MESSAGE_DENIED])
      }
    }
  }

  private handleChangedProvider(message: RecordMessage) {
    this.hasProvider = message.action === RA.SUBSCRIPTION_HAS_PROVIDER
    this.emit(EVENT.RECORD_HAS_PROVIDER_CHANGED, this.hasProvider)
  }

  public handle(message: RecordMessage): void {
    if (message.isAck) {
      this.handleAckMessage(message)
      return
    }

    const mapping: any = {
      [RA.PATCH]: () => this.handleUpdateMessage(message),
      [RA.UPDATE]: () => this.handleUpdateMessage(message),
      [RA.ERASE]: () => this.handleUpdateMessage(message),
      [RA.DELETE_SUCCESS]: () => this.handleDeleteSuccess(),
      [RA.DELETED]: () => this.handleDeleted(),
      [RA.MESSAGE_DENIED]: () => this.handleMessageDenied(message),
      [RA.MESSAGE_PERMISSION_ERROR]: () => this.handleMessageDenied(message),
      [RA.SUBSCRIPTION_HAS_PROVIDER]: () => this.handleChangedProvider(message),
      [RA.SUBSCRIPTION_HAS_NO_PROVIDER]: () => this.handleChangedProvider(message)
    }
    const defaultAction = () => {}

    const handleAction = mapping[message.action] || defaultAction
    return handleAction()
  }

  private handleReadResponse(message: RecordMessage): void {
    this.version = message.version as number
    this.applyChange(setPath(this.data, null, message.parsedData))
    this.stateMachine.transition(RA.READ_RESPONSE)
  }

  /// Record modification, including update and delete ///

  private sendUpdate(path: string | null = null, data: any, callback?: WriteAckCallback) {
    (this.version as number)++

    const message = {
      topic: TOPIC.RECORD,
      version: this.version,
      name: this.name
    }

    if (!path) {
      Object.assign(message, { action: RA.UPDATE, parsedData: data })
    } else if (data === undefined) {
      Object.assign(message, { action: RA.ERASE, path })
    } else {
      Object.assign(message, { action: RA.PATCH, path, parsedData: data })
    }

    if (callback) {
      this.recordServices.writeAckService.send(message as RecordWriteMessage, callback)
    } else {
      this.services.connection.sendMessage(message as RecordWriteMessage)
    }
  }

  /**
   * Applies incoming updates and patches to the record's dataset
   */
  public applyUpdate(message: RecordWriteMessage) {
    const version = message.version
    const data = message.parsedData

    if (this.version === null) {
      this.version = version
    }

    this.version = version
    let newData
    if (message.action === RA.PATCH) {
      newData = setPath(this.data, message.path as string, data)
    } else if (message.action === RA.ERASE) {
      newData = setPath(this.data, message.path as string, undefined)
    } else {
      newData = setPath(this.data, null, data)
    }
    this.applyChange(newData)
  }

  /**
   * Compares the new values for every path with the previously stored ones and
   * updates the subscribers if the value has changed
   */
  private applyChange(newData: any) {
    const oldData = this.data
    this.data = newData

    const paths = this.emitter.eventNames()
    for (let i = 0; i < paths.length; i++) {
      const newValue = getPath(newData, paths[i], false)
      const oldValue = getPath(oldData, paths[i], false)

      if (newValue !== oldValue) {
        this.emitter.emit(paths[i], this.get(paths[i]))
      }
    }
  }

  /**
   * If connected sends the delete message to server, otherwise
   * we delete in local storage and transition to delete success.
   */
  private sendDelete(): void {
    this.whenReady(null, () => {
      if (this.services.connection.isConnected) {
        const message = {
          topic: TOPIC.RECORD,
          action: RA.DELETE,
          name: this.name
        }
        this.deletedTimeout = this.services.timeoutRegistry.add({
          message,
          event: EVENT.RECORD_DELETE_TIMEOUT,
          duration: this.options.recordDeleteTimeout
        })
        this.services.connection.sendMessage(message)
      } else {
        this.services.storage.delete(this.name, () => {
          this.services.timerRegistry.requestIdleCallback(() => {
            this.stateMachine.transition(RA.DELETE_SUCCESS)
          })
        })
      }
    })
  }

  /**
   * Destroys the record and nulls all
   * its dependencies
   */
  private destroy() {
    this.services.timerRegistry.remove(this.deletedTimeout)
    this.services.timerRegistry.remove(this.discardTimeout)
    this.services.timerRegistry.remove(this.responseTimeout)
    this.services.connection.removeOnLost(this.onConnectionLost)
    this.emitter.off()
    this.isReady = false
    this.whenComplete(this.name)
  }

  private onConnectionLost(): void {
    this.saveRecordLocally()
  }

}
