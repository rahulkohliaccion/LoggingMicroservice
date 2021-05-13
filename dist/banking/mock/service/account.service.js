"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAccountService = void 0;
const account_contract_1 = require("../../../common/contract/account.contract");
const account_entity_1 = require("../../../common/entity/account.entity");
const account_enum_1 = require("../../../common/enum/account.enum");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
class MockAccountService {
    getCustomerAccountList(data) {
        try {
            const resource = require(`../resources/${data.CIFID}/account`)
                .AccountDetails.CustomerAccountDetails.AccountDetailsRec;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resource.map((t) => {
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
                }, 2000);
            });
        }
        catch (error) {
            if (error.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_ACCOUNT_DETAILS(data.CIFID));
            }
            throw new common_1.InternalServerErrorException(error_1.ACCOUNTS_GLOBAL_ERR);
        }
    }
    createCurrentAccount(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    accountId: String(56875675453434 + Math.floor(Math.random() * 10000)),
                });
            }, 1000);
        });
    }
    getAccountBalanceDetails(data) {
        try {
            const resource = require(`../resources/${data.CIFID}/account`).AccountBalanceDetails(data.accountId);
            return Promise.resolve(Object.assign(Object.assign({}, resource.AcctBalDetails), { accountId: data.accountId }));
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_BALANCE_DETAILS(data.accountId));
            }
            throw new common_1.InternalServerErrorException(error_1.ACCOUNT_BALANCE_GLOBAL_ERR);
        }
    }
}
exports.MockAccountService = MockAccountService;
//# sourceMappingURL=account.service.js.map