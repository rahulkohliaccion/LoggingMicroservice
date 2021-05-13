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
exports.LogEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let LogEntity = class LogEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => require("typeorm/driver/mongodb/typings").ObjectID }, level: { required: true, type: () => String }, channel: { required: true, type: () => String }, corelationId: { required: true, type: () => String }, userId: { required: true, type: () => String }, Operation: { required: true, type: () => Object }, message: { required: true, type: () => String } };
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], LogEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "level", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "corelationId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "Operation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "message", void 0);
LogEntity = __decorate([
    typeorm_1.Entity('Log')
], LogEntity);
exports.LogEntity = LogEntity;
//# sourceMappingURL=healthcheck.entity.js.map