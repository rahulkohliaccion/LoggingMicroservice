import { Connection } from 'typeorm';
import { CountryEntity } from './entity/country.entity';
export declare const countryProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<CountryEntity>;
    inject: string[];
}[];
