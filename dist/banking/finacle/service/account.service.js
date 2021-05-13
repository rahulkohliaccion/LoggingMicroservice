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
exports.AccountService = void 0;
const account_contract_1 = require("../../../common/contract/account.contract");
const account_entity_1 = require("../../../common/entity/account.entity");
const account_enum_1 = require("../../../common/enum/account.enum");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
const urlBuilder_1 = require("../urlBuilder");
let AccountService = class AccountService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getCustomerAccountList(params) {
        try {
            const response = await this.httpService
                .get(urlBuilder_1.GET_CUSTOMER_ACCOUNT_LIST(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return Promise.resolve(response.data.data.CustomerAccountDetails.AccountDetailsRec.map((t) => {
                return {
                    id: t.accountId,
                    masterAcctId: t.masterAcctInd,
                    currencyCode: t.curCode,
                    multiCurrInd: t.multiCurrInd,
                    branchId: t.acctBranchId,
                    topUpInd: account_enum_1.AccountTopUpIndicatorEnum[t.topUpInd],
                    shortName: t.acctShortName,
                    role: t.role,
                    status: account_enum_1.AccountStatusEnum[t.acctStatus],
                    openingDate: t.acctOpeningDate,
                    closedDate: t.acctClosedDate,
                    prodCategoryId: t.prodCategoryId,
                    productCategory: account_enum_1.AccountTypeEnum[t.productCategory],
                    productCode: t.productCode,
                };
            }));
        }
        catch (error) {
            if (error.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_ACCOUNT_DETAILS(params.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.ACCOUNTS_GLOBAL_ERR);
        }
    }
    async getAccountBalanceDetails(params) {
        try {
            const response = await this.httpService
                .get(urlBuilder_1.GET_ACCOUNT_BALANCE_DETAIL(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return response.data.data.AcctBalDetails;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.ACCOUNT_BALANCE_GLOBAL_ERR);
        }
    }
    async createCurrentAccount(params) {
        try {
            const response = await this.httpService
                .put(urlBuilder_1.CREATE_CURRENT_ACCOUNT(params), { req: params.body }, {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return response.data.data;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.ACCOUNT_BALANCE_GLOBAL_ERR);
        }
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map