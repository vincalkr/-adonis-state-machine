import { EventContract } from '@ioc:Adonis/Addons/StateMachine/Event';
class Event implements EventContract {
  public data: any;

  constructor({ data }) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }
}

export default Event;
