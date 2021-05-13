"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryProviders = void 0;
const provider_1 = require("../../constant/provider");
const country_entity_1 = require("./entity/country.entity");
exports.countryProviders = [
    {
        provide: provider_1.COUNTRY_REPOSITORY,
        useFactory: (connection) => connection.getRepository(country_entity_1.CountryEntity),
        inject: [provider_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=country.provider.js.map