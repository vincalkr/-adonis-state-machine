"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
class StateMachineProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
        // Register your own bindings
        this.app.container.bind('Adonis/Addons/StateMachine', () => src_1.Machine);
        this.app.container.bind('Adonis/Addons/StateMachine/Status', () => src_1.Status);
        this.app.container.bind('Adonis/Addons/StateMachine/Event', () => src_1.Event);
        this.app.container.bind('Adonis/Addons/StateMachine/Exception', () => src_1.Exception);
    }
    async boot() {
        // All bindings are ready, feel free to use them
    }
    async ready() {
        // App is ready
    }
    async shutdown() {
        // Cleanup, since app is going down
    }
}
exports.default = StateMachineProvider;
