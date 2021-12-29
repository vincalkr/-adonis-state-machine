import { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers';
import { BaseModel } from '@ioc:Adonis/Lucid/Orm';
import { join } from 'path';
import { capitalize, isString } from 'lodash';
import Status from './Status';
import Event from './Event';
import { ClassNotFound, StatusChangeEventFailed, TransitionNotAllowed } from './Exception';

const Machine = <T extends NormalizeConstructor<typeof BaseModel>>(superclass: T) => {
  return class extends superclass {
    public $namespace: string;
    public $attribute: string;
    public $initialState: any;
    public $transitions: string[][];

    public static boot() {
      if (this.booted) {
        return;
      }

      super.boot();

      this.before('create', this.convertToString);
      this.before('update', this.convertToString);
      this.before('save', this.convertToString);

      this.after('create', this.onAfterFind);
      this.after('update', this.onAfterFind);
      this.after('save', this.onAfterFind);
      this.after('save', this.onAfterFind);
      this.after('find', this.onAfterFind);

      this.after('fetch', (models: any) => models.map(this.onAfterFind));
      this.after('paginate', (models: any) => models.map(this.onAfterFind));
    }

    public addState<T1>(namespace: string, attribute: string) {
      this.$namespace = namespace;
      this.$attribute = attribute;

      return {
        allowTransitions: (states: string[][]) => {
          this.$transitions = states;
          return {
            default: (state: T1) => {
              this.$initialState = state;
            },
          };
        },
      };
    }

    public allowedStatusChanges() {
      const allowedStatusChange: string[] = [];

      for (const [head, ...branches] of Array.from(this.$transitions)) {
        if (head === this.getStatus().id) {
          allowedStatusChange.push(...branches);
        }
      }

      return allowedStatusChange.filter((status) => this.canChangeTo(status));
    }

    public getAvailableStatus() {
      const availableStatus: [string, string][] = [];
      for (const [head] of this.$transitions) {
        availableStatus[head] = this.getStatusObject(head).label;
      }
      return availableStatus;
    }

    public getAvailableStatusObjects() {
      const availableStatus: [string, Status][] = [];
      for (const [head] of this.$transitions) {
        availableStatus[head] = this.getStatusObject(head);
      }

      return availableStatus;
    }

    public async canChangeTo(id: string, event?: Event) {
      if (!Array.from(this.$transitions).some(([head]) => head === this.getStatus().id))
        return false;

      if (
        Array.from(this.$transitions).some(([head, ...branches]) => {
          if (head === this.getStatus().id) {
            if (branches.includes(id)) {
              return true;
            }
          }
        }) &&
        (await this[this.$attribute].canChangeTo(id, event))
      ) {
        return true;
      } else return false;
    }

    public async changeTo(id: string, event?: Event) {
      const oldStatusId = this.getStatus().id;

      if (oldStatusId === id) {
        return true;
      }

      if (!(await this.canChangeTo(id, event))) {
        throw new TransitionNotAllowed(
          this.getStatus().toString(),
          this.getStatusObject(id).toString()
        );
      }

      if (!this[this.$attribute]) {
        this[this.$attribute] = this.$initialState;
      }

      if (await this[this.$attribute].onExit(id, event)) {
        this.setStatusObject(id);

        if (!(await this[this.$attribute].onEntry(id, event))) {
          const newStatus = this[this.$attribute];
          this.setStatusObject(oldStatusId);
          throw new StatusChangeEventFailed(newStatus.constructor.name, 'onEntry');
        }

        return true;
      } else {
        throw new StatusChangeEventFailed(this.getStatus().constructor.name, 'onExit');
      }
    }

    public static onAfterFind(model) {
      model = model || this;
      if (!(model[model.$attribute] instanceof Status)) {
        model[model.$attribute] = model.getStatusObject(model[model.$attribute]);
      }
    }

    public static convertToString(model) {
      model = model || this;
      if (model[model.$attribute] instanceof Status) {
        model[model.$attribute] = model[model.$attribute].id;
      } else {
        model[model.$attribute] = model.getStatusId();
      }
    }

    public getStatusObject<T>(id: string): Status & T {
      try {
        const status = require(`${join(
          process.cwd(),
          `app/Models/Status/${this.$namespace}/${capitalize(id.toString().replace('-', ''))}.ts`
        )}`).default;
        return new status();
      } catch (error) {
        throw new ClassNotFound(
          `${capitalize(id.toString())} (${`app/Models/Status/${this.$namespace}/${capitalize(
            id.toString().replace('-', '')
          )}.ts`})`
        );
      }
    }

    public setStatusObject(id: string) {
      this[this.$attribute] = this.getStatusObject(id.toString());
      this[this.$attribute].stateBehavior = this;
      return this[this.$attribute];
    }

    public getStatusId() {
      if (this[this.$attribute] instanceof Status) {
        return this[this.$attribute].id;
      } else if (!this[this.$attribute]) {
        this[this.$attribute] = this.$initialState.$id;
      }
      return this[this.$attribute];
    }

    public getStatus<T>(): Status & T {
      if (!this[this.$attribute]) {
        this[this.$attribute] = this.$initialState;
      }

      if (isString(this[this.$attribute])) {
        return this.setStatusObject(this.getStatusId());
      } else {
        return this[this.$attribute];
      }
    }
  };
};

export default Machine;
