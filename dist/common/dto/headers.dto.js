"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonHeadersDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CommonHeadersDTO {
    constructor() {
        this.REQUESTUUID = '84482d0c-9397-11eb-a8b3-0242ac130003';
        this.GLOBALUUID = '9487687b-cbc5-43e1-b6b2-6e1795d735ad';
        this.BUSINESSCHANNELID = 'fa0e9630-f648-4b09-bc0d-2e8016ac65fe';
        this.ACCESSTOKEN = 'fe2ec148-dda0-4a52-8320-e95934f5fd4afe2ec148-dda0-4a52-8320-e95934f5fd4afe2ec148-dda0-4a52-8320-e95934f5fd4a';
        this.BANKID = '123';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { USERID: { required: true, type: () => String, description: "User ID of the customer" }, CIFID: { required: true, type: () => String, description: "Unique Identification number of the customer" } };
    }
}
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "REQUESTUUID", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "GLOBALUUID", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "BUSINESSCHANNELID", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "ACCESSTOKEN", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "BANKID", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "USERID", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CommonHeadersDTO.prototype, "CIFID", void 0);
exports.CommonHeadersDTO = CommonHeadersDTO;
//# sourceMappingURL=headers.dto.js.map