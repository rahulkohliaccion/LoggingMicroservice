export declare class Deposit {
    readonly accountShortName: string;
    readonly accountOpenDate: Date;
    readonly dispatchMode: string;
    readonly schemeType: string;
    readonly schemeCode: string;
    readonly totalIntAmt: number;
    readonly totalIntAmtCrncyCode: string;
    readonly customerId: string;
    readonly interestCreditAcctId: string;
    readonly depositTermMonth: number;
    readonly depositTermDays: number;
    readonly accountClosureFlg: string;
    readonly maturityAmtCrncyCode: string;
    readonly acctFreezeStatus: string;
    readonly acctBal: AcctBal[];
}
declare class AcctBal {
    readonly balanceType: string;
    readonly creditDebitInd: string;
    readonly balanceAmount: string;
}
export declare class DepositInterest {
    readonly totalIntAmt: number;
    readonly totalIntAmtCrncyCode: string;
}
export {};
