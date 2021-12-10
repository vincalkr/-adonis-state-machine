declare module '@ioc:Adonis/Addons/StateMachine/Status' {
  interface StatusContract {
    $id(): string;
    $label(): string;
    id(): string;
    label(): string;
    getAvailableStatus(): [string, string][];
    getAvailableStatusObjects(): [string, StatusContract][];
    canChangeTo(): boolean;
    onEntry(): boolean;
    onExit(): boolean;
    toJSON(): string;
    toString(): string;
  }

  const Status: StatusContract;

  export { StatusContract };
  export default Status;
}
