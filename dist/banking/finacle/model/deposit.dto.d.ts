export declare class DepositAccountDetailsDTO {
    readonly AcctInqRs: AcctInqRs;
}
declare class AcctInqRs {
    readonly schemeCode: string;
    readonly acctFreezeStatus: string;
    readonly accountShortName: string;
    readonly schemeType: string;
    readonly maturityAmtCrncyCode: string;
    readonly accountOpenDate: Date;
    readonly APYvalue: number;
    readonly totalIntAmtCrncyCode: string;
    readonly dispatchMode: string;
    readonly depositTermDays: number;
    readonly interestCreditAcctId: string;
    readonly accountClosureFlg: string;
    readonly customerId: string;
    readonly maturityAmt: number;
    readonly totalIntAmt: number;
    readonly depositTermMonth: number;
    readonly acctBal: AcctBal[];
    readonly customData: CustomData;
}
export declare class CustomData {
    acctCrPrefPcnt: string;
}
export declare class AcctBal {
    readonly balanceType: string;
    readonly creditDebitInd: string;
    readonly balanceAmount: string;
    readonly currencyCode: string;
}
export {};
