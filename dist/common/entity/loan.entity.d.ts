export declare class Loan {
    readonly outstandingAmt: number;
    readonly outstandingAmtCcy: string;
    readonly acctOpenDate: Date;
    readonly acctMatDate: Date;
    readonly interestRate: number;
}
export declare class LoanOverdue {
    readonly totalOverdueAmount: number;
    readonly totalOverdueCurrency: string;
    readonly overdueDate: Date;
    readonly overduePosition?: LoanOverduePosition;
}
export declare class LoanOverduePosition {
    readonly acctId: string;
    readonly intDemandAmt: number;
    readonly intDemandCrncy: string;
    readonly collectedIntAmt: number;
    readonly collectedIntCrncy: string;
    readonly intOverDueAmt: number;
    readonly intOverDueCrncy: string;
    readonly nonInterestDmdAmt: number;
    readonly nonInterestDmdCrncy: string;
    readonly nonInterestCollectedAmt: number;
    readonly nonInterestCollectedCrncy: string;
    readonly nonInterestOverDueAmt: number;
    readonly nonInterestOverDueCrncy: string;
}
export declare class LoanInstallment {
    readonly nextInstlAmt: number;
    readonly nextInstlAmtCcy: string;
    readonly nextInstlDate: Date;
}
