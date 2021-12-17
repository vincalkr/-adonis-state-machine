declare module '@ioc:Adonis/Addons/StateMachine/Status' {
  import { EventContract } from '@ioc:Adonis/Addons/StateMachine/Event';
  interface StatusContract {
    $id(): string;
    $label(): string;
    id(): string;
    label(): string;
    getAvailableStatus(): [string, string][];
    getAvailableStatusObjects(): [string, StatusContract][];
    canChangeTo(id: string, event?: EventContract): boolean;
    onEntry(id: string): boolean;
    onExit(id: string): boolean;
    toJSON(): string;
    toString(): string;
  }

  const Status: new (...args: any[]) => StatusContract;

  export { StatusContract };
  export default Status;
}
