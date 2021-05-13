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
exports.FinacleLoanService = void 0;
const loan_dto_1 = require("../../mock/model/loan.dto");
const loan_contract_1 = require("../../../common/contract/loan.contract");
const loan_entity_1 = require("../../../common/entity/loan.entity");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
const urlBuilder_1 = require("../urlBuilder");
let FinacleLoanService = class FinacleLoanService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getLoanDetails(params) {
        try {
            const result = await this.httpService
                .get(urlBuilder_1.GET_GENERAL_LOAN_DETAILS(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            const data = result.data.data.cICrvLoanGenDetailsOutStruct;
            return Promise.resolve({
                outstandingAmt: data.payOffAmt,
                outstandingAmtCcy: data.payOffAmtCcy,
                acctOpenDate: data.acctOpenDate,
                acctMatDate: data.maturityDate,
                interestRate: data.interestRate,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    async getLoanOverdueDetails(params) {
        try {
            const resource = await this.httpService
                .get(urlBuilder_1.GET_LOAN_DUE_DETAILS(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return Promise.resolve(resource.data.data.LoanOvduDmdInqRs.OvdueDmdRec.filter((t) => {
                return t.InstlAmt - t.collectionAmt > 0;
            }).map((t) => {
                return {
                    overdueDate: t.dmdEffDate,
                    totalOverdueAmount: t.InstlAmt - t.collectionAmt,
                    totalOverdueCurrency: t.instlAmtCrncy,
                };
            }));
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    async getLoanOverduePosition(params) {
        try {
            const response = await this.httpService
                .get(urlBuilder_1.GET_LOAN_DUE_POSITION_DETAILS(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return Promise.resolve(response.data.data.LoanOvduPosInqRs.laOvduPosResultRec);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
    async getLoanInstallmentDetails(params) {
        try {
            const result = await this.httpService
                .get(urlBuilder_1.GET_GENERAL_LOAN_DETAILS(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            const data = result.data.data.cICrvLoanGenDetailsOutStruct;
            return Promise.resolve({
                nextInstlAmt: data.nextInstlAmt,
                nextInstlAmtCcy: data.nextInstlAmtCcy,
                nextInstlDate: data.nxtPayDate,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.LOANS_GLOBAL_ERR);
        }
    }
};
FinacleLoanService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], FinacleLoanService);
exports.FinacleLoanService = FinacleLoanService;
//# sourceMappingURL=loan.service.js.map