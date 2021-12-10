export declare class ClassNotFound extends Error {
    constructor(className: string);
}
export declare class TransitionNotAllowed extends Error {
    constructor(from: string, to: string);
}
export declare class StatusChangeEventFailed extends Error {
    constructor(name: string, method: 'onEntry' | 'onExit');
}
