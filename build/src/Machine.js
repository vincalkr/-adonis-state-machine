"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Helpers_1 = require("@ioc:Adonis/Core/Helpers");
const Status_1 = __importDefault(require("./Status"));
const Exception_1 = require("./Exception");
const Machine = (superclass) => {
    return class extends superclass {
        static boot() {
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
            this.after('fetch', (models) => models.map(this.onAfterFind));
            this.after('paginate', (models) => models.map(this.onAfterFind));
        }
        addState(namespace, attribute) {
            this.$namespace = namespace;
            this.$attribute = attribute;
            return {
                allowTransitions: (states) => {
                    this.$transitions = states;
                    return {
                        default: (state) => {
                            this.$initialState = state;
                        },
                    };
                },
            };
        }
        allowedStatusChanges() {
            const allowedStatusChange = [];
            for (const [head, ...branches] of Array.from(this.$transitions)) {
                if (head === this.getStatus().id) {
                    allowedStatusChange.push(...branches);
                }
            }
            return allowedStatusChange.filter((status) => this.canChangeTo(status));
        }
        getAvailableStatus() {
            const availableStatus = [];
            for (const [head] of this.$transitions) {
                availableStatus[head] = this.getStatusObject(head).label;
            }
            return availableStatus;
        }
        getAvailableStatusObjects() {
            const availableStatus = [];
            for (const [head] of this.$transitions) {
                availableStatus[head] = this.getStatusObject(head);
            }
            return availableStatus;
        }
        async canChangeTo(id, event) {
            if (!Array.from(this.$transitions).some(([head]) => head === this.getStatus().id))
                return false;
            if (Array.from(this.$transitions).some(([head, ...branches]) => {
                if (head === this.getStatus().id) {
                    if (branches.includes(id)) {
                        return true;
                    }
                }
            }) &&
                (await this[this.$attribute].canChangeTo(id, event))) {
                return true;
            }
            else
                return false;
        }
        async changeTo(id, event) {
            const oldStatusId = this.getStatus().id;
            if (oldStatusId === id) {
                return true;
            }
            if (!(await this.canChangeTo(id, event))) {
                throw new Exception_1.TransitionNotAllowed(this.getStatus().toString(), this.getStatusObject(id).toString());
            }
            if (!this[this.$attribute]) {
                this[this.$attribute] = this.$initialState;
            }
            if (await this[this.$attribute].onExit(id, event)) {
                this.setStatusObject(id);
                if (!(await this[this.$attribute].onEntry(id, event))) {
                    const newStatus = this[this.$attribute];
                    this.setStatusObject(oldStatusId);
                    throw new Exception_1.StatusChangeEventFailed(newStatus.constructor.name, 'onEntry');
                }
                return true;
            }
            else {
                throw new Exception_1.StatusChangeEventFailed(this.getStatus().constructor.name, 'onExit');
            }
        }
        static onAfterFind(model) {
            model = model || this;
            if (!(model[model.$attribute] instanceof Status_1.default)) {
                model[model.$attribute] = model.getStatusObject(model[model.$attribute]);
            }
        }
        static convertToString(model) {
            model = model || this;
            if (model[model.$attribute] instanceof Status_1.default) {
                model[model.$attribute] = model[model.$attribute].id;
            }
            else {
                model[model.$attribute] = model.getStatusId();
            }
        }
        getStatusObject(id) {
            try {
                const status = require(`${(0, path_1.join)(process.cwd(), `app/Models/Status/${this.$namespace}/${Helpers_1.string.capitalCase(id.toString())}.ts`)}`).default;
                return new status();
            }
            catch (error) {
                throw new Exception_1.ClassNotFound(`${Helpers_1.string.capitalCase(id.toString())} (${`app/Models/Status/${this.$namespace}/${Helpers_1.string.capitalCase(id.toString())}.ts`})`);
            }
        }
        setStatusObject(id) {
            this[this.$attribute] = this.getStatusObject(id.toString());
            this[this.$attribute].stateBehavior = this;
            return this[this.$attribute];
        }
        getStatusId() {
            if (this[this.$attribute] instanceof Status_1.default) {
                return this[this.$attribute].id;
            }
            else if (!this[this.$attribute]) {
                this[this.$attribute] = this.$initialState.$id;
            }
            return this[this.$attribute];
        }
        getStatus() {
            if (!this[this.$attribute]) {
                this[this.$attribute] = this.$initialState;
            }
            if (Helpers_1.types.isString(this[this.$attribute])) {
                return this.setStatusObject(this.getStatusId());
            }
            else {
                return this[this.$attribute];
            }
        }
    };
};
exports.default = Machine;
