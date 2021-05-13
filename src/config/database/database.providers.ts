import { DATABASE_CONNECTION } from '@constant/provider';
import { ConfigService } from '@nestjs/config';
import { createConnection } from 'typeorm';
import { DatabaseConfig } from '..';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async (config: ConfigService) => {
            const dbConfig = config.get<DatabaseConfig>('database');

            return await createConnection({
                type: 'mongodb',
                username: dbConfig.username,
                password: dbConfig.password,
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                // database: dbConfig.name,
                host: dbConfig.host,
                port: dbConfig.port,
            });
        },
        inject: [ConfigService],
    },
];
