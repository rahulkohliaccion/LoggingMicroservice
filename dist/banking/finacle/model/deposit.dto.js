"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcctBal = exports.CustomData = exports.DepositAccountDetailsDTO = void 0;
const openapi = require("@nestjs/swagger");
class DepositAccountDetailsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { AcctInqRs: { required: true, type: () => AcctInqRs } };
    }
}
exports.DepositAccountDetailsDTO = DepositAccountDetailsDTO;
class AcctInqRs {
    static _OPENAPI_METADATA_FACTORY() {
        return { schemeCode: { required: true, type: () => String }, acctFreezeStatus: { required: true, type: () => String }, accountShortName: { required: true, type: () => String }, schemeType: { required: true, type: () => String }, maturityAmtCrncyCode: { required: true, type: () => String }, accountOpenDate: { required: true, type: () => Date }, APYvalue: { required: true, type: () => Number }, totalIntAmtCrncyCode: { required: true, type: () => String }, dispatchMode: { required: true, type: () => String }, depositTermDays: { required: true, type: () => Number }, interestCreditAcctId: { required: true, type: () => String }, accountClosureFlg: { required: true, type: () => String }, customerId: { required: true, type: () => String }, maturityAmt: { required: true, type: () => Number }, totalIntAmt: { required: true, type: () => Number }, depositTermMonth: { required: true, type: () => Number }, acctBal: { required: true, type: () => [require("./deposit.dto").AcctBal] }, customData: { required: true, type: () => require("./deposit.dto").CustomData } };
    }
}
class CustomData {
    static _OPENAPI_METADATA_FACTORY() {
        return { acctCrPrefPcnt: { required: true, type: () => String } };
    }
}
exports.CustomData = CustomData;
class AcctBal {
    static _OPENAPI_METADATA_FACTORY() {
        return { balanceType: { required: true, type: () => String }, creditDebitInd: { required: true, type: () => String }, balanceAmount: { required: true, type: () => String }, currencyCode: { required: true, type: () => String } };
    }
}
exports.AcctBal = AcctBal;
//# sourceMappingURL=deposit.dto.js.map