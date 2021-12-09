declare module '@ioc:Adonis/Addons/StateMachine/Event' {
  interface EventContract {
    getData(): any;
  }

  export { EventContract };
  export default EventContract;
}
