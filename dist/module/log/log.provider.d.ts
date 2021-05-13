import { Connection } from 'typeorm';
import { LogEntity } from './entity/log.entity';
export declare const logProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<LogEntity>;
    inject: string[];
}[];
