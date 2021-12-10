declare module '@ioc:Adonis/Addons/StateMachine/Event' {
  interface EventContract {
    getData(): any;
  }

  const Event: EventContract;

  export { EventContract };
  export default Event;
}
