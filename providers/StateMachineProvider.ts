import { ApplicationContract } from '@ioc:Adonis/Core/Application';
import { Machine, Status, Event, Exception } from '../src';

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
export default class StateMachineProvider {
  constructor(public app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    this.app.container.bind('Adonis/Addons/StateMachine', () => Machine);
    this.app.container.bind('Adonis/Addons/StateMachine/Status', () => Status);
    this.app.container.bind('Adonis/Addons/StateMachine/Event', () => Event);
    this.app.container.bind('Adonis/Addons/StateMachine/Exception', () => Exception);
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
