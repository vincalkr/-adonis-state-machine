declare module '@ioc:Adonis/Addons/StateMachine/Event' {
  interface EventContract<T = any> {
    getData(): T;
  }

  const Event: new (data: any) => EventContract;

  export { EventContract };
  export default Event;
}
