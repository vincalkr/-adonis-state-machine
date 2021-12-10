declare module '@ioc:Adonis/Addons/StateMachine' {
  import { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers';
  import { StatusContract } from '@ioc:Adonis/Addons/StateMachine/Status';
  import { EventContract } from '@ioc:Adonis/Addons/StateMachine/Event';

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

  const Machine: <T extends NormalizeConstructor<import('@ioc:Adonis/Lucid/Orm').LucidModel>>(
    superclass: T
  ) => new (...args: any[]) => MachineContract;

  export default Machine;
}
