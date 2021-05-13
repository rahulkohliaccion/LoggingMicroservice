import { LOG_REPOSITORY, DATABASE_CONNECTION } from '@constant/provider';
import { Connection } from 'typeorm';
import { LogEntity } from './entity/log.entity';

export const logProviders = [
    {
        provide: LOG_REPOSITORY,
        useFactory: (connection: Connection) =>
            connection.getRepository(LogEntity),
        inject: [DATABASE_CONNECTION],
    },
];
