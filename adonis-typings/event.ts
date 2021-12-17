declare module '@ioc:Adonis/Addons/StateMachine/Event' {
  interface EventContract {
    getData(): any;
  }

  const Event: new (data: any) => EventContract;

  export { EventContract };
  export default Event;
}
