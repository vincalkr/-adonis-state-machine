declare module '@ioc:Adonis/Addons/StateMachine/Exception' {
    const ClassNotFound: Error;
    const TransitionNotAllowed: Error;
    const StatusChangeEventFailed: Error;
    export { ClassNotFound, TransitionNotAllowed, StatusChangeEventFailed };
}
