"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositInterest = exports.Deposit = void 0;
const openapi = require("@nestjs/swagger");
class Deposit {
    static _OPENAPI_METADATA_FACTORY() {
        return { accountShortName: { required: true, type: () => String, description: "Short name of the account" }, accountOpenDate: { required: true, type: () => Date, description: "The date on which account was opened" }, dispatchMode: { required: true, type: () => String, description: "Mode by which communication should be done" }, schemeType: { required: true, type: () => String, description: "Scheme type of the account" }, schemeCode: { required: true, type: () => String, description: "Scheme code of the account" }, totalIntAmt: { required: true, type: () => Number, description: "Total Rate of Interest Amount" }, totalIntAmtCrncyCode: { required: true, type: () => String, description: "Total Rate of Interest Amount Currency" }, customerId: { required: true, type: () => String, description: "Customer id of the account" }, interestCreditAcctId: { required: true, type: () => String, description: "Account in which interest to be credited" }, depositTermMonth: { required: true, type: () => Number, description: "Tenor of the deposit account in month" }, depositTermDays: { required: true, type: () => Number, description: "Tenor of the deposit in days" }, accountClosureFlg: { required: true, type: () => String, description: "Account closure flag" }, maturityAmtCrncyCode: { required: true, type: () => String, description: "Maturity amount currency code" }, acctFreezeStatus: { required: true, type: () => String, description: "Account freeze status" }, acctBal: { required: true, type: () => [AcctBal], description: "Account Balance record" } };
    }
}
exports.Deposit = Deposit;
class AcctBal {
    static _OPENAPI_METADATA_FACTORY() {
        return { balanceType: { required: true, type: () => String }, creditDebitInd: { required: true, type: () => String }, balanceAmount: { required: true, type: () => String } };
    }
}
class DepositInterest {
    static _OPENAPI_METADATA_FACTORY() {
        return { totalIntAmt: { required: true, type: () => Number, description: "Total Rate of Interest Amount" }, totalIntAmtCrncyCode: { required: true, type: () => String, description: "Total Rate of Interest Amount Currency" } };
    }
}
exports.DepositInterest = DepositInterest;
//# sourceMappingURL=deposit.entity.js.map