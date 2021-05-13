"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const provider_1 = require("../../constant/provider");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: provider_1.DATABASE_CONNECTION,
        useFactory: async (config) => {
            const dbConfig = config.get('database');
            return await typeorm_1.createConnection({
                type: 'mongodb',
                username: dbConfig.username,
                password: dbConfig.password,
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                host: dbConfig.host,
                port: dbConfig.port,
            });
        },
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map