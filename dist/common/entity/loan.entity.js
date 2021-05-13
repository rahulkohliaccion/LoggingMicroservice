"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanInstallment = exports.LoanOverduePosition = exports.LoanOverdue = exports.Loan = void 0;
const openapi = require("@nestjs/swagger");
class Loan {
    static _OPENAPI_METADATA_FACTORY() {
        return { outstandingAmt: { required: true, type: () => Number, description: "Total outstanding loan balance" }, outstandingAmtCcy: { required: true, type: () => String, description: "Loan currency code" }, acctOpenDate: { required: true, type: () => Date, description: "Opening date of the loan account" }, acctMatDate: { required: true, type: () => Date, description: "Maturity date of the loan account" }, interestRate: { required: true, type: () => Number, description: "Interest rate on the loan" } };
    }
}
exports.Loan = Loan;
class LoanOverdue {
    static _OPENAPI_METADATA_FACTORY() {
        return { totalOverdueAmount: { required: true, type: () => Number, description: "The total overdue amount of the loan account." }, totalOverdueCurrency: { required: true, type: () => String, description: "The currency of overdue amount of the loan account." }, overdueDate: { required: true, type: () => Date, description: "The effective date of the overdue - Need clarity" }, overduePosition: { required: false, type: () => require("./loan.entity").LoanOverduePosition, description: "Loan overdue position" } };
    }
}
exports.LoanOverdue = LoanOverdue;
class LoanOverduePosition {
    static _OPENAPI_METADATA_FACTORY() {
        return { acctId: { required: true, type: () => String, description: "The ID of the loan account." }, intDemandAmt: { required: true, type: () => Number, description: "The total interest demand for the loan account." }, intDemandCrncy: { required: true, type: () => String, description: "The currency code of the interest demand." }, collectedIntAmt: { required: true, type: () => Number, description: "The interest collected for the loan account" }, collectedIntCrncy: { required: true, type: () => String, description: "The currency code of the collected interest" }, intOverDueAmt: { required: true, type: () => Number, description: "The interest overdue amount for the loan account" }, intOverDueCrncy: { required: true, type: () => String, description: "The currency code of the interest overdue." }, nonInterestDmdAmt: { required: true, type: () => Number, description: "The total demand amount apart from the interest." }, nonInterestDmdCrncy: { required: true, type: () => String, description: "The currency code of the total demand amount" }, nonInterestCollectedAmt: { required: true, type: () => Number, description: "The total amount collected apart from interest." }, nonInterestCollectedCrncy: { required: true, type: () => String, description: "The currency code of the collected amount." }, nonInterestOverDueAmt: { required: true, type: () => Number, description: "The total overdue amount apart from interest." }, nonInterestOverDueCrncy: { required: true, type: () => String, description: "The currency code of the total overdue amount." } };
    }
}
exports.LoanOverduePosition = LoanOverduePosition;
class LoanInstallment {
    static _OPENAPI_METADATA_FACTORY() {
        return { nextInstlAmt: { required: true, type: () => Number, description: "THe next installment amount" }, nextInstlAmtCcy: { required: true, type: () => String, description: "The next installment currency" }, nextInstlDate: { required: true, type: () => Date, description: "The next installment date" } };
    }
}
exports.LoanInstallment = LoanInstallment;
//# sourceMappingURL=loan.entity.js.map