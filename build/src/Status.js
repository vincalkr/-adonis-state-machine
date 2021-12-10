"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Status {
    constructor() {
        if (!this._id) {
            this._id = this.constructor.$id;
        }
        if (!this._label) {
            this._label = this.constructor.$label;
        }
    }
    static get $id() {
        return 'state';
    }
    static get $label() {
        return 'label';
    }
    get id() {
        return this.constructor.$id;
    }
    get label() {
        return this._label;
    }
    getAvailableStatus() {
        return (this.stateBehavior && this.stateBehavior.getAvailableStatus()) || [];
    }
    getAvailableStatusObjects() {
        return (this.stateBehavior && this.getAvailableStatusObjects()) || [];
    }
    canChangeTo(id, event) {
        return true;
    }
    onEntry(id, event) {
        return true;
    }
    onExit(id, event) {
        return true;
    }
    toJSON() {
        return JSON.stringify({
            id: this._id,
            label: this.label,
        });
    }
    toString() {
        return this.id;
    }
}
exports.default = Status;
