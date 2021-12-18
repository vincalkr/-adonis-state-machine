declare module '@ioc:Adonis/Addons/StateMachine/Exception' {
  const ClassNotFound: new () => Error;
  const TransitionNotAllowed: new () => Error;
  const StatusChangeEventFailed: new () => Error;
  export { ClassNotFound, TransitionNotAllowed, StatusChangeEventFailed };
}
