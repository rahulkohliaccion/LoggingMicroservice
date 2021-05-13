"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryDTO = void 0;
const openapi = require("@nestjs/swagger");
class CountryDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number, description: "Unique identification number of the country" }, name: { required: true, type: () => String, description: "Name of the Country" }, code: { required: true, type: () => String, description: "Unique code of the country" } };
    }
}
exports.CountryDTO = CountryDTO;
//# sourceMappingURL=country.dto.js.map