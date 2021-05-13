import { Connection } from 'typeorm';
export declare const logProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<unknown>;
    inject: string[];
}[];
