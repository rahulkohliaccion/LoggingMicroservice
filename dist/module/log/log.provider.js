"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logProviders = void 0;
const provider_1 = require("../../constant/provider");
const log_entity_1 = require("./entity/log.entity");
exports.logProviders = [
    {
        provide: provider_1.LOG_REPOSITORY,
        useFactory: (connection) => connection.getRepository(log_entity_1.LogEntity),
        inject: [provider_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=log.provider.js.map