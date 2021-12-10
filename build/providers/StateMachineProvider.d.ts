/// <reference types="@adonisjs/application/build/adonis-typings" />
import { ApplicationContract } from '@ioc:Adonis/Core/Application';
export default class StateMachineProvider {
    app: ApplicationContract;
    constructor(app: ApplicationContract);
    register(): void;
    boot(): Promise<void>;
    ready(): Promise<void>;
    shutdown(): Promise<void>;
}
