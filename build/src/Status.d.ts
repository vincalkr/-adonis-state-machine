import Event from '@ioc:Adonis/Addons/StateMachine/Event';
declare class Status {
    _id: string;
    _label: string;
    stateBehavior: Status;
    static get $id(): string;
    static get $label(): string;
    constructor();
    get id(): string;
    get label(): string;
    getAvailableStatus(): [string, string][];
    getAvailableStatusObjects(): [string, Status][];
    canChangeTo(id: string, event: Event): boolean;
    onEntry(id: string, event: Event): boolean;
    onExit(id: string, event: Event): boolean;
    toJSON(): string;
    toString(): string;
}
export default Status;
