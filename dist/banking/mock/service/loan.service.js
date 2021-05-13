"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockLoanService = void 0;
const loan_contract_1 = require("../../../common/contract/loan.contract");
const loan_entity_1 = require("../../../common/entity/loan.entity");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
let MockLoanService = class MockLoanService {
    getLoanDetails(params) {
        try {
            const resource = require(`../resources/${params.CIFID}/loan`)
                .GetLoanGenDtls.cICrvLoanGenDetailsOutStruct;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        outstandingAmt: resource.payOffAmt,
                        outstandingAmtCcy: resource.payOffAmtCcy,
                        acctOpenDate: resource.acctOpenDate,
                        acctMatDate: resource.maturityDate,
                        interestRate: resource.interestRate,
                    });
                }, 1500);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_LOAN_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    getLoanOverdueDetails(params) {
        try {
            const resource = require(`../resources/${params.CIFID}/loan`)
                .LoanOverdueDetails.LoanOvduDmdInqRs;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resource.OvdueDmdRec.filter((t) => {
                        return t.InstlAmt - t.collectionAmt > 0;
                    }).map((t) => {
                        return {
                            overdueDate: t.dmdEffDate,
                            totalOverdueAmount: t.InstlAmt - t.collectionAmt,
                            totalOverdueCurrency: t.instlAmtCrncy,
                        };
                    }));
                }, 1200);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_LOAN_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    getLoanOverduePosition(params) {
        try {
            const resource = require(`../resources/${params.CIFID}/loan`)
                .LoanOverduePositionInq;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resource.LoanOvduPosInqRs.laOvduPosResultRec);
                }, 800);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_LOAN_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    getLoanInstallmentDetails(params) {
        try {
            const resource = require(`../resources/${params.CIFID}/loan`)
                .GetLoanGenDtls.cICrvLoanGenDetailsOutStruct;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        nextInstlAmt: resource.nextInstlAmt,
                        nextInstlAmtCcy: resource.nextInstlAmtCcy,
                        nextInstlDate: resource.nxtPayDate,
                    });
                }, 800);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_LOAN_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
};
MockLoanService = __decorate([
    common_1.Injectable()
], MockLoanService);
exports.MockLoanService = MockLoanService;
//# sourceMappingURL=loan.service.js.map