/// <reference types="@adonisjs/lucid" />
import { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers';
import Status from './Status';
import Event from './Event';
declare const Machine: <T extends NormalizeConstructor<import("@ioc:Adonis/Lucid/Orm").LucidModel>>(superclass: T) => {
    new (...args: any[]): {
        $namespace: string;
        $attribute: string;
        $initialState: any;
        $transitions: string[][];
        addState<T1>(namespace: string, attribute: string): {
            allowTransitions: (states: string[][]) => {
                default: (state: T1) => void;
            };
        };
        allowedStatusChanges(): string[];
        getAvailableStatus(): [string, string][];
        getAvailableStatusObjects(): [string, Status][];
        canChangeTo(id: string, event?: Event | undefined): Promise<boolean>;
        changeTo(id: string, event?: Event | undefined): Promise<boolean>;
        getStatusObject<T_1>(id: string): Status & T_1;
        setStatusObject(id: string): any;
        getStatusId(): any;
        getStatus<T_2>(): Status & T_2;
        $attributes: import("@ioc:Adonis/Lucid/Orm").ModelObject;
        $extras: import("@ioc:Adonis/Lucid/Orm").ModelObject;
        $original: import("@ioc:Adonis/Lucid/Orm").ModelObject;
        $preloaded: {
            [relation: string]: import("@ioc:Adonis/Lucid/Orm").LucidRow | import("@ioc:Adonis/Lucid/Orm").LucidRow[];
        };
        $columns: undefined;
        $sideloaded: import("@ioc:Adonis/Lucid/Orm").ModelObject;
        $primaryKeyValue?: string | number | undefined;
        $isPersisted: boolean;
        $isNew: boolean;
        $isLocal: boolean;
        $dirty: import("@ioc:Adonis/Lucid/Orm").ModelObject;
        $isDirty: boolean;
        $isDeleted: boolean;
        $options?: import("@ioc:Adonis/Lucid/Orm").ModelOptions | undefined;
        $trx?: import("@ioc:Adonis/Lucid/Database").TransactionClientContract | undefined;
        $setOptionsAndTrx(options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined): void;
        useTransaction(trx: import("@ioc:Adonis/Lucid/Database").TransactionClientContract): any;
        useConnection(connection: string): any;
        $getQueryFor(action: "insert", client: import("@ioc:Adonis/Lucid/Database").QueryClientContract): import("@ioc:Adonis/Lucid/Database").InsertQueryBuilderContract<unknown[]>;
        $getQueryFor(action: "delete" | "refresh" | "update", client: import("@ioc:Adonis/Lucid/Database").QueryClientContract): import("@ioc:Adonis/Lucid/Orm").ModelQueryBuilderContract<import("@ioc:Adonis/Lucid/Orm").LucidModel, import("@ioc:Adonis/Lucid/Orm").LucidRow>;
        $setAttribute(key: string, value: any): void;
        $getAttribute(key: string): any;
        $getAttributeFromCache(key: string, callback: (value: any) => any): any;
        $hasRelated(key: string): boolean;
        $setRelated(key: string, result: import("@ioc:Adonis/Lucid/Database").OneOrMany<import("@ioc:Adonis/Lucid/Orm").LucidRow> | null): void;
        $pushRelated(key: string, result: import("@ioc:Adonis/Lucid/Database").OneOrMany<import("@ioc:Adonis/Lucid/Orm").LucidRow> | null): void;
        $getRelated(key: string, defaultValue?: any): import("@ioc:Adonis/Lucid/Database").OneOrMany<import("@ioc:Adonis/Lucid/Orm").LucidRow> | null | undefined;
        $consumeAdapterResult(adapterResult: import("@ioc:Adonis/Lucid/Orm").ModelObject, sideloadAttributes?: import("@ioc:Adonis/Lucid/Orm").ModelObject | undefined): void;
        $hydrateOriginals(): void;
        fill(value: Partial<{
            $namespace: string;
            $attribute: string;
            $initialState: any;
            $transitions: string[][];
        }>, allowExtraProperties?: boolean | undefined): any;
        merge(value: Partial<{
            $namespace: string;
            $attribute: string;
            $initialState: any;
            $transitions: string[][];
        }>, allowExtraProperties?: boolean | undefined): any;
        save(): Promise<any>;
        delete(): Promise<void>;
        refresh(): Promise<any>;
        load: import("@ioc:Adonis/Lucid/Orm").LucidRowPreload<any>;
        preload: import("@ioc:Adonis/Lucid/Orm").LucidRowPreload<any>;
        loadAggregate: <Self extends any, Name extends import("@ioc:Adonis/Lucid/Orm").ExtractModelRelations<Self>, RelatedBuilder = Self[Name] extends import("@ioc:Adonis/Lucid/Orm").ModelRelations ? Self[Name]["subQuery"] : never>(name: Name, callback: (builder: RelatedBuilder) => void) => import("@ioc:Adonis/Lucid/Orm").LazyLoadAggregatesContract<Self>;
        loadCount: <Self_1 extends any, Name_1 extends import("@ioc:Adonis/Lucid/Orm").ExtractModelRelations<Self_1>, RelatedBuilder_1 = Self_1[Name_1] extends import("@ioc:Adonis/Lucid/Orm").ModelRelations ? Self_1[Name_1]["subQuery"] : never>(name: Name_1, callback?: ((builder: RelatedBuilder_1) => void) | undefined) => import("@ioc:Adonis/Lucid/Orm").LazyLoadAggregatesContract<Self_1>;
        serializeAttributes(fields?: import("@ioc:Adonis/Lucid/Orm").CherryPickFields | undefined, raw?: boolean | undefined): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        serializeComputed(fields?: import("@ioc:Adonis/Lucid/Orm").CherryPickFields | undefined): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        serializeRelations(fields: undefined, raw: true): {
            [key: string]: import("@ioc:Adonis/Lucid/Orm").LucidRow | import("@ioc:Adonis/Lucid/Orm").LucidRow[];
        };
        serializeRelations(cherryPick: {
            [relation: string]: import("@ioc:Adonis/Lucid/Orm").CherryPick;
        } | undefined, raw: false | undefined): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        serializeRelations(cherryPick?: {
            [relation: string]: import("@ioc:Adonis/Lucid/Orm").CherryPick;
        } | undefined, raw?: boolean | undefined): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        serialize(cherryPick?: import("@ioc:Adonis/Lucid/Orm").CherryPick | undefined): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        toObject(): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        toJSON(): import("@ioc:Adonis/Lucid/Orm").ModelObject;
        related<Name_2 extends import("@ioc:Adonis/Lucid/Orm").ExtractModelRelations<any>>(relation: Name_2): any[Name_2] extends import("@ioc:Adonis/Lucid/Orm").ModelRelations ? any[Name_2]["client"] : never;
    };
    boot(): void;
    onAfterFind(model: any): void;
    convertToString(model: any): void;
    readonly booted: boolean;
    $columnsDefinitions: Map<string, import("@ioc:Adonis/Lucid/Orm").ModelColumnOptions>;
    $relationsDefinitions: Map<string, import("@ioc:Adonis/Lucid/Orm").RelationshipsContract>;
    $computedDefinitions: Map<string, import("@ioc:Adonis/Lucid/Orm").ComputedOptions>;
    primaryKey: string;
    connection?: string | undefined;
    namingStrategy: import("@ioc:Adonis/Lucid/Orm").NamingStrategyContract;
    table: string;
    selfAssignPrimaryKey: boolean;
    $adapter: import("@ioc:Adonis/Lucid/Orm").AdapterContract;
    $hooks: import("@poppinss/hooks").Hooks;
    $keys: {
        attributesToColumns: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
        attributesToSerialized: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
        columnsToAttributes: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
        columnsToSerialized: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
        serializedToColumns: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
        serializedToAttributes: import("@ioc:Adonis/Lucid/Orm").ModelKeysContract;
    };
    $createFromAdapterResult: <T_3 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_3, result?: import("@ioc:Adonis/Lucid/Orm").ModelObject | undefined, sideloadAttributes?: import("@ioc:Adonis/Lucid/Orm").ModelObject | undefined, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => InstanceType<T_3> | null;
    $createMultipleFromAdapterResult: <T_4 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_4, results: import("@ioc:Adonis/Lucid/Orm").ModelObject[], sideloadAttributes?: import("@ioc:Adonis/Lucid/Orm").ModelObject | undefined, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => InstanceType<T_4>[];
    $addColumn: (name: string, options: Partial<import("@ioc:Adonis/Lucid/Orm").ColumnOptions>) => import("@ioc:Adonis/Lucid/Orm").ColumnOptions;
    $hasColumn: (name: string) => boolean;
    $getColumn: (name: string) => import("@ioc:Adonis/Lucid/Orm").ModelColumnOptions | undefined;
    $addComputed: (name: string, options: Partial<import("@ioc:Adonis/Lucid/Orm").ComputedOptions>) => import("@ioc:Adonis/Lucid/Orm").ComputedOptions;
    $hasComputed: (name: string) => boolean;
    $getComputed: (name: string) => import("@ioc:Adonis/Lucid/Orm").ComputedOptions | undefined;
    $addRelation: (name: string, type: "hasOne" | "hasMany" | "belongsTo" | "manyToMany" | "hasManyThrough", relatedModel: () => import("@ioc:Adonis/Lucid/Orm").LucidModel, options: import("@ioc:Adonis/Lucid/Orm").ModelRelationOptions) => void;
    $hasRelation: (name: string) => boolean;
    $getRelation: {
        <Model extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Name_3 extends import("@ioc:Adonis/Lucid/Orm").ExtractModelRelations<InstanceType<Model>>>(this: Model, name: Name_3): InstanceType<Model>[Name_3] extends import("@ioc:Adonis/Lucid/Orm").ModelRelations ? InstanceType<Model>[Name_3]["client"]["relation"] : import("@ioc:Adonis/Lucid/Orm").RelationshipsContract;
        <Model_1 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: Model_1, name: string): import("@ioc:Adonis/Lucid/Orm").RelationshipsContract;
    };
    $defineProperty: <Model_2 extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Prop extends keyof Model_2>(this: Model_2, propertyName: Prop, defaultValue: Model_2[Prop], strategy: "inherit" | "define" | ((value: Model_2[Prop]) => Model_2[Prop])) => void;
    before: {
        <Model_3 extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Event_1 extends "find" | "fetch">(this: Model_3, event: Event_1, handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<import("@ioc:Adonis/Lucid/Orm").ModelQueryBuilderContract<Model_3, InstanceType<Model_3>>, Event_1>): void;
        <Model_4 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: Model_4, event: "paginate", handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<[import("@ioc:Adonis/Lucid/Orm").ModelQueryBuilderContract<Model_4, InstanceType<Model_4>>, import("@ioc:Adonis/Lucid/Orm").ModelQueryBuilderContract<Model_4, InstanceType<Model_4>>], "paginate">): void;
        <Model_5 extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Event_2 extends import("@ioc:Adonis/Lucid/Orm").EventsList>(this: Model_5, event: Event_2, handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<InstanceType<Model_5>, Event_2>): void;
    };
    after: {
        <Model_6 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: Model_6, event: "fetch", handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<InstanceType<Model_6>[], "fetch">): void;
        <Model_7 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: Model_7, event: "paginate", handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<import("@ioc:Adonis/Lucid/Orm").ModelPaginatorContract<InstanceType<Model_7>>, "paginate">): void;
        <Model_8 extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Event_3 extends import("@ioc:Adonis/Lucid/Orm").EventsList>(this: Model_8, event: Event_3, handler: import("@ioc:Adonis/Lucid/Orm").HooksHandler<InstanceType<Model_8>, Event_3>): void;
    };
    create: <T_5 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_5, values: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_5>>>, options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_5>>;
    createMany: <T_6 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_6, values: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_6>>>[], options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_6>[]>;
    find: <T_7 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_7, value: any, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_7> | null>;
    findOrFail: <T_8 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_8, value: any, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_8>>;
    findBy: <T_9 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_9, key: string, value: any, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_9> | null>;
    findByOrFail: <T_10 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_10, key: string, value: any, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_10>>;
    first: <T_11 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_11, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_11> | null>;
    firstOrFail: <T_12 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_12, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_12>>;
    findMany: <T_13 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_13, value: any[], options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_13>[]>;
    firstOrNew: <T_14 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_14, searchPayload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_14>>>, savePayload?: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_14>>> | undefined, options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_14>>;
    firstOrCreate: <T_15 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_15, searchPayload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_15>>>, savePayload?: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_15>>> | undefined, options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_15>>;
    updateOrCreate: <T_16 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_16, searchPayload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_16>>>, updatePayload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_16>>>, options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_16>>;
    fetchOrNewUpMany: <T_17 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_17, predicate: keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_17>> | (keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_17>>)[], payload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_17>>>[], options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_17>[]>;
    fetchOrCreateMany: <T_18 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_18, predicate: keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_18>> | (keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_18>>)[], payload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_18>>>[], options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_18>[]>;
    updateOrCreateMany: <T_19 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_19, predicate: keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_19>> | (keyof import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_19>>)[], payload: Partial<import("@ioc:Adonis/Lucid/Orm").ModelAttributes<InstanceType<T_19>>>[], options?: import("@ioc:Adonis/Lucid/Orm").ModelAssignOptions | undefined) => Promise<InstanceType<T_19>[]>;
    all: <T_20 extends import("@ioc:Adonis/Lucid/Orm").LucidModel>(this: T_20, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => Promise<InstanceType<T_20>[]>;
    query: <Model_9 extends import("@ioc:Adonis/Lucid/Orm").LucidModel, Result = InstanceType<Model_9>>(this: Model_9, options?: import("@ioc:Adonis/Lucid/Orm").ModelAdapterOptions | undefined) => import("@ioc:Adonis/Lucid/Orm").ModelQueryBuilderContract<Model_9, Result>;
    truncate: (cascade?: boolean | undefined) => Promise<void>;
} & T;
export default Machine;
