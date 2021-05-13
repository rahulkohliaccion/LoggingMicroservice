"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDepositService = void 0;
const deposit_contract_1 = require("../../../common/contract/deposit.contract");
const deposit_entity_1 = require("../../../common/entity/deposit.entity");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
let MockDepositService = class MockDepositService {
    getDepositDetails(params) {
        try {
            const resource = require(`../resources/${params.CIFID}/deposit`)
                .DepositAccountDetails;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resource.AcctInqRs);
                }, 3000);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_ACCOUNT_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.ACCOUNTS_GLOBAL_ERR);
        }
    }
};
MockDepositService = __decorate([
    common_1.Injectable()
], MockDepositService);
exports.MockDepositService = MockDepositService;
//# sourceMappingURL=deposit.service.js.map