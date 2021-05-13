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
exports.LogService = void 0;
const provider_1 = require("../../../constant/provider");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let LogService = class LogService {
    constructor(logRepository) {
        this.logRepository = logRepository;
    }
    async saveInfoLogs(logger) {
        common_1.Logger.log(`log here -> ${JSON.stringify(logger.value)}`);
        this.logRepository.save(logger.value)
            .catch(error => common_1.Logger.log(error));
    }
    async saveDebugLogs(logger) {
        this.logRepository.save(logger.value)
            .catch(error => common_1.Logger.log(error));
    }
    async saveVerboseLogs(logger) {
        this.logRepository.save(logger.value)
            .catch(error => common_1.Logger.log(error));
    }
    async saveErrorLogs(logger) {
        this.logRepository.save(logger.value)
            .catch(error => common_1.Logger.log(error));
    }
    async saveFatalLogs(logger) {
        this.logRepository.save(logger.value)
            .catch(error => common_1.Logger.log(error));
    }
};
LogService = __decorate([
    __param(0, common_1.Inject(provider_1.LOG_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map