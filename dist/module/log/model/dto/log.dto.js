"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyDTO = void 0;
const openapi = require("@nestjs/swagger");
class CurrencyDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number, description: "Unique identification number of the Currency" }, name: { required: true, type: () => String, description: "Name of the Currency" }, code: { required: true, type: () => String, description: "Unique code of the Currency" } };
    }
}
exports.CurrencyDTO = CurrencyDTO;
//# sourceMappingURL=log.dto.js.map