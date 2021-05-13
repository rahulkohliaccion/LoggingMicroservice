"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrentAccountRs = exports.AccountBalanceDetailDTO = exports.AccountDetailsRec = exports.AccountDTO = void 0;
const openapi = require("@nestjs/swagger");
class AccountDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { CustomerAccountDetails: { required: true, type: () => CustomerAccountDetailsDTO } };
    }
}
exports.AccountDTO = AccountDTO;
class CustomerAccountDetailsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { AccountDetailsRec: { required: true, type: () => [require("./account.dto").AccountDetailsRec] } };
    }
}
class AccountDetailsRec {
    static _OPENAPI_METADATA_FACTORY() {
        return { acctShortName: { required: true, type: () => String }, curCode: { required: true, type: () => String }, acctOpeningDate: { required: true, type: () => Date }, accountId: { required: true, type: () => String }, acctBranchId: { required: true, type: () => String }, masterAcctInd: { required: true, type: () => String }, multiCurrInd: { required: true, type: () => String }, role: { required: true, type: () => String }, acctStatus: { required: true, type: () => String }, acctClosedDate: { required: true, type: () => Date }, topUpInd: { required: true, type: () => String }, prodCategoryId: { required: true, type: () => String }, productCode: { required: true, type: () => String }, productCategory: { required: true, type: () => String } };
    }
}
exports.AccountDetailsRec = AccountDetailsRec;
class AccountBalanceDetailDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { AcctBalDetails: { required: true, type: () => AcctBalDetails } };
    }
}
exports.AccountBalanceDetailDTO = AccountBalanceDetailDTO;
class AcctBalDetails {
    static _OPENAPI_METADATA_FACTORY() {
        return { futureBalance: { required: true, type: () => Balance }, clearBalance: { required: true, type: () => Balance }, availableBalance: { required: true, type: () => Balance }, accountId: { required: true, type: () => String } };
    }
}
class Balance {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, currency: { required: true, type: () => String }, crDrInd: { required: true, type: () => String } };
    }
}
class CreateCurrentAccountRs {
    static _OPENAPI_METADATA_FACTORY() {
        return { accountId: { required: true, type: () => String } };
    }
}
exports.CreateCurrentAccountRs = CreateCurrentAccountRs;
//# sourceMappingURL=account.dto.js.map