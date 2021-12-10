import Event from './Event';

class Status {
  public _id: string;
  public _label: string;
  public stateBehavior: Status;

  public static get $id() {
    return 'state';
  }

  public static get $label() {
    return 'label';
  }

  constructor() {
    if (!this._id) {
      this._id = (<typeof Status>this.constructor).$id;
    }

    if (!this._label) {
      this._label = (<typeof Status>this.constructor).$label;
    }
  }

  public get id(): string {
    return (<typeof Status>this.constructor).$id;
  }

  public get label() {
    return this._label;
  }

  public getAvailableStatus(): [string, string][] {
    return (this.stateBehavior && this.stateBehavior.getAvailableStatus()) || [];
  }

  public getAvailableStatusObjects(): [string, Status][] {
    return (this.stateBehavior && this.getAvailableStatusObjects()) || [];
  }

  public canChangeTo(id: string, event: Event) {
    return true;
  }

  public onEntry(id: string, event: Event) {
    return true;
  }

  public onExit(id: string, event: Event) {
    return true;
  }

  public toJSON() {
    return JSON.stringify({
      id: this._id,
      label: this.label,
    });
  }

  public toString() {
    return this.id;
  }
}

export default Status;
