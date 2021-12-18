import { Exception } from '@adonisjs/core/build/standalone';

export class ClassNotFound extends Exception {
  constructor(className: string) {
    super(`Class not found: ${className}`, 500, 'E_STATE_MACHINE_STATUS_CLASS_NOT_FOUND');
  }
}

export class TransitionNotAllowed extends Exception {
  constructor(from: string, to: string) {
    super(
      `Transition not allowed: ${from} -> ${to}`,
      406,
      'E_STATE_MACHINE_TRANSITION_NOT_ALLOWED'
    );
  }
}

export class StatusChangeEventFailed extends Exception {
  constructor(name: string, method: 'onEntry' | 'onExit') {
    super(
      `${name}: Status change event ${method} failed`,
      406,
      'E_STATE_MACHINE_STATUS_CHANGE_EVENT_FAILED'
    );
  }
}
