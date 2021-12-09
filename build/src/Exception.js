"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusChangeEventFailed = exports.TransitionNotAllowed = exports.ClassNotFound = void 0;
class ClassNotFound extends Error {
    constructor(className) {
        super(`Class not found: ${className}`);
    }
}
exports.ClassNotFound = ClassNotFound;
class TransitionNotAllowed extends Error {
    constructor(from, to) {
        super(`Transition not allowed: ${from} -> ${to}`);
    }
}
exports.TransitionNotAllowed = TransitionNotAllowed;
class StatusChangeEventFailed extends Error {
    constructor(name, method) {
        super(`${name}: Status change event ${method} failed`);
    }
}
exports.StatusChangeEventFailed = StatusChangeEventFailed;
