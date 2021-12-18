declare module '@ioc:Adonis/Addons/StateMachine/Exception' {
  import { Exception } from '@adonisjs/core/build/standalone';
  const ClassNotFound: new () => Exception;
  const TransitionNotAllowed: new () => Exception;
  const StatusChangeEventFailed: new () => Exception;
  export { ClassNotFound, TransitionNotAllowed, StatusChangeEventFailed };
}
