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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const log_service_1 = require("../service/log.service");
const provider_1 = require("../../../constant/provider");
const microservices_1 = require("@nestjs/microservices");
let LogController = class LogController {
    constructor(logService) {
        this.logService = logService;
    }
    addInfoLog(body) {
        return this.logService.saveInfoLogs(body);
    }
    addDebugLog(body) {
        return this.logService.saveDebugLogs(body);
    }
    addVerboseLog(body) {
        return this.logService.saveVerboseLogs(body);
    }
    addErrorLog(body) {
        return this.logService.saveErrorLogs(body);
    }
    addFatalLog(body) {
        return this.logService.saveFatalLogs(body);
    }
};
__decorate([
    microservices_1.MessagePattern(provider_1.INFO_LOG_TOPIC(), microservices_1.Transport.KAFKA),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LogController.prototype, "addInfoLog", null);
__decorate([
    microservices_1.MessagePattern(provider_1.DEBUG_LOG_TOPIC(), microservices_1.Transport.KAFKA),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LogController.prototype, "addDebugLog", null);
__decorate([
    microservices_1.MessagePattern(provider_1.VERBOSE_LOG_TOPIC(), microservices_1.Transport.KAFKA),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LogController.prototype, "addVerboseLog", null);
__decorate([
    microservices_1.MessagePattern(provider_1.ERROR_LOG_TOPIC(), microservices_1.Transport.KAFKA),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LogController.prototype, "addErrorLog", null);
__decorate([
    microservices_1.MessagePattern(provider_1.FATAL_LOG_TOPIC(), microservices_1.Transport.KAFKA),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LogController.prototype, "addFatalLog", null);
LogController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map