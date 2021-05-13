"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanOverduePositionInq = exports.cICrvLoanGenDetailsOutStructDTO = exports.GetLoanGenDtls = exports.LoanInstallmentDTO = exports.LoanOvduDmdInqRsDTO = exports.LoanOverdueDTO = void 0;
const openapi = require("@nestjs/swagger");
class LoanOverdueDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { LoanOvduDmdInqRs: { required: true, type: () => require("./loan.dto").LoanOvduDmdInqRsDTO } };
    }
}
exports.LoanOverdueDTO = LoanOverdueDTO;
class LoanOvduDmdInqRsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { OvdueDmdRec: { required: true, type: () => [OvdueDmdRecDTO] }, totalLiabilityAmt: { required: true, type: () => Number }, totalLiabCrncy: { required: true, type: () => String }, totalCollectedAmt: { required: true, type: () => Number }, totalCollectedAmtCrncy: { required: true, type: () => String }, advIntCollectedAmt: { required: true, type: () => Number }, advIntCollectedCrncy: { required: true, type: () => String }, numInstallCovered: { required: true, type: () => Number }, totOverdueInstallments: { required: true, type: () => Number }, currOverdueInstallments: { required: true, type: () => Number } };
    }
}
exports.LoanOvduDmdInqRsDTO = LoanOvduDmdInqRsDTO;
class OvdueDmdRecDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { dmdType: { required: true, type: () => String }, dmdEffDate: { required: true, type: () => Date }, flowId: { required: true, type: () => String }, InstlAmt: { required: true, type: () => Number }, instlAmtCrncy: { required: true, type: () => String }, collectionAmt: { required: true, type: () => Number }, collectionAmtCrncy: { required: true, type: () => String } };
    }
}
class LoanInstallmentDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { cICrvLoanGenDetailsOutStruct: { required: true, type: () => require("./loan.dto").cICrvLoanGenDetailsOutStructDTO } };
    }
}
exports.LoanInstallmentDTO = LoanInstallmentDTO;
class GetLoanGenDtls {
    static _OPENAPI_METADATA_FACTORY() {
        return { cICrvLoanGenDetailsOutStruct: { required: true, type: () => require("./loan.dto").cICrvLoanGenDetailsOutStructDTO } };
    }
}
exports.GetLoanGenDtls = GetLoanGenDtls;
class cICrvLoanGenDetailsOutStructDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { acctOpenDate: { required: true, type: () => Date }, loanAmt: { required: true, type: () => String }, loanAmtCrncy: { required: true, type: () => String }, availCrLimit: { required: true, type: () => String }, loanType: { required: true, type: () => String }, billFreq: { required: true, type: () => String }, nextBillDate: { required: true, type: () => Date }, interestRate: { required: true, type: () => Number }, daysPastDue: { required: true, type: () => Number }, payOffAmt: { required: true, type: () => Number }, payOffAmtCcy: { required: true, type: () => String }, maturityDate: { required: true, type: () => Date }, nextInstlAmt: { required: true, type: () => Number }, nextInstlAmtCcy: { required: true, type: () => String }, nxtPayDate: { required: true, type: () => Date }, payAheadFlg: { required: true, type: () => String }, totClaimedAmt: { required: true, type: () => Number } };
    }
}
exports.cICrvLoanGenDetailsOutStructDTO = cICrvLoanGenDetailsOutStructDTO;
class LoanOverduePositionInq {
    static _OPENAPI_METADATA_FACTORY() {
        return { LoanOvduPosInqRs: { required: true, type: () => LoanOvduPosInqRs } };
    }
}
exports.LoanOverduePositionInq = LoanOverduePositionInq;
class LoanOvduPosInqRs {
    static _OPENAPI_METADATA_FACTORY() {
        return { laOvduPosResultRec: { required: true, type: () => [LAOvduPosResultRec] } };
    }
}
class LAOvduPosResultRec {
    static _OPENAPI_METADATA_FACTORY() {
        return { nonInterestOverDueAmt: { required: true, type: () => Number }, intOverDueCrncy: { required: true, type: () => String }, collectedIntCrncy: { required: true, type: () => String }, acctId: { required: true, type: () => String }, nonInterestDmdAmt: { required: true, type: () => Number }, nonInterestDmdCrncy: { required: true, type: () => String }, nonInterestCollectedAmt: { required: true, type: () => Number }, nonInterestOverDueCrncy: { required: true, type: () => String }, intDemandCrncy: { required: true, type: () => String }, nonInterestCollectedCrncy: { required: true, type: () => String }, intDemandAmt: { required: true, type: () => Number }, intOverDueAmt: { required: true, type: () => Number }, collectedIntAmt: { required: true, type: () => Number } };
    }
}
//# sourceMappingURL=loan.dto.js.map