export class TimerRegistry {
    add(timeout) {
        return setTimeout(timeout.callback.bind(timeout.context, timeout.data), timeout.duration);
    }
    remove(timerId) {
        clearTimeout(timerId);
        return true;
    }
    requestIdleCallback(callback) {
        Promise.resolve().then(() => callback());
    }
}
//# sourceMappingURL=timer-registry.js.map