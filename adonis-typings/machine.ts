declare module '@ioc:Adonis/Addons/StateMachine' {
  import { StatusContract } from '@ioc:Adonis/Addons/StateMachine/Status';
  import { EventContract } from '@ioc:Adonis/Addons/StateMachine/Event';
  import Machine from 'src/Machine';

  interface MachineContract {
    addState<T1>(
      namespace: string,
      attribute: string
    ): {
      allowTransitions: (states: string[][]) => {
        default: (state: T1) => void;
      };
    };

    allowedStatusChanges(): string[];
    getAvailableStatus(): [string, string][];
    getAvailableStatusObjects(): [string, StatusContract][];
    canChangeTo(id: string, event?: EventContract): Promise<boolean>;
    changeTo(id: string, event?: EventContract): Promise<boolean>;
    getStatusId(): string;
    getStatus<T>(): StatusContract & T;
  }

  export { MachineContract };

  export default Machine;
}
