import { EventContract } from '@ioc:Adonis/Addons/StateMachine/Event';
declare class Event implements EventContract {
    data: any;
    constructor({ data }: {
        data: any;
    });
    getData(): any;
}
export default Event;
