export class ClassNotFound extends Error {
  constructor(className: string) {
    super(`Class not found: ${className}`);
  }
}

export class TransitionNotAllowed extends Error {
  constructor(from: string, to: string) {
    super(`Transition not allowed: ${from} -> ${to}`);
  }
}

export class StatusChangeEventFailed extends Error {
  constructor(name: string, method: 'onEntry' | 'onExit') {
    super(`${name}: Status change event ${method} failed`);
  }
}
