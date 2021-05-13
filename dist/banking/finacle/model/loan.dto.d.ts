export declare class LoanOverdueDTO {
    readonly LoanOvduDmdInqRs: LoanOvduDmdInqRsDTO;
}
declare class LoanOvduDmdInqRsDTO {
    readonly OvdueDmdRec: OvdueDmdRecDTO[];
}
declare class OvdueDmdRecDTO {
    readonly OvdueDmdRec: OvdueDmdRecDetailsDTO;
    readonly totalLiabilityAmt: number;
    readonly totalLiabCrncy: string;
    readonly totalCollectedAmt: number;
    readonly totalCollectedAmtCrncy: string;
    readonly advIntCollectedAmt: number;
    readonly advIntCollectedCrncy: string;
    readonly numInstallCovered: number;
    readonly totOverdueInstallments: number;
    readonly currOverdueInstallments: number;
}
declare class OvdueDmdRecDetailsDTO {
    readonly dmdType: string;
    readonly dmdEffDate: Date;
    readonly flowId: string;
    readonly InstlAmt: number;
    readonly instlAmtCrncy: string;
    readonly collectionAmt: number;
    readonly collectionAmtCrncy: string;
}
export declare class LoanInstallmentDTO {
    readonly cICrvLoanGenDetailsOutStruct: cICrvLoanGenDetailsOutStructDTO;
}
export declare class GetLoanGenDtls {
    readonly cICrvLoanGenDetailsOutStruct: cICrvLoanGenDetailsOutStructDTO;
}
declare class cICrvLoanGenDetailsOutStructDTO {
    readonly acctOpenDate: Date;
    readonly loanAmt: string;
    readonly loanAmtCrncy: string;
    readonly availCrLimit: string;
    readonly loanType: string;
    readonly billFreq: string;
    readonly nextBillDate: Date;
    readonly interestRate: number;
    readonly daysPastDue: number;
    readonly payOffAmt: number;
    readonly payOffAmtCcy: string;
    readonly maturityDate: Date;
    readonly nextInstlAmt: number;
    readonly nextInstlAmtCcy: string;
    readonly nxtPayDate: Date;
    readonly payAheadFlg: string;
    readonly totClaimedAmt: number;
}
export declare class LoanOverduePositionInq {
    readonly LoanOvduPosInqRs: LoanOvduPosInqRs;
}
declare class LoanOvduPosInqRs {
    readonly laOvduPosResultRec: LAOvduPosResultRec[];
}
declare class LAOvduPosResultRec {
    nonInterestOverDueAmt: number;
    intOverDueCrncy: string;
    collectedIntCrncy: string;
    acctId: string;
    nonInterestDmdAmt: number;
    nonInterestDmdCrncy: string;
    nonInterestCollectedAmt: number;
    nonInterestOverDueCrncy: string;
    intDemandCrncy: string;
    nonInterestCollectedCrncy: string;
    intDemandAmt: number;
    intOverDueAmt: number;
    collectedIntAmt: number;
}
export {};
