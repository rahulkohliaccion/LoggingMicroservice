export declare const GetLoanGenDtls: {
    cICrvLoanGenDetailsOutStruct: {
        interestRate: string;
        nxtPayDate: Date;
        nextInstlAmt: string;
        acctOpenDate: string;
        loanType: string;
        payAheadFlg: string;
        daysPastDue: string;
        loanAmtCcy: string;
        loanAmt: string;
        availCrLimitCcy: string;
        nextBillDate: string;
        payOffAmtCcy: string;
        payOffAmt: string;
        availCrLimit: string;
        maturityDate: Date;
        totClaimedAmt: string;
        totClaimedAmtCcy: string;
        nextInstlAmtCcy: string;
        billFreq: string;
    };
};
export declare const LoanOverdueDetails: {
    LoanOvduDmdInqRs: {
        advIntCollectedCrncy: string;
        totalCollectedAmtCrncy: string;
        totalCollectedAmt: number;
        advIntCollectedAmt: number;
        totalLiabilityAmt: number;
        numInstallCovered: number;
        totalLiabCrncy: string;
        totOverdueInstallments: number;
        OvdueDmdRec: {
            instlAmtCrncy: string;
            collectionAmtCrncy: string;
            collectionAmt: number;
            InstlAmt: number;
            dmdEffDate: string;
            flowId: string;
            dmdType: string;
        }[];
        currOverdueInstallments: number;
    };
};
export declare const LoanOverduePositionInq: {
    LoanOvduPosInqRs: {
        laOvduPosResultRec: {
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
        }[];
    };
};
