export declare const DepositAccountDetails: {
    AcctInqRs: {
        schemeCode: string;
        acctFreezeStatus: string;
        accountShortName: string;
        schemeType: string;
        maturityAmtCrncyCode: string;
        accountOpenDate: string;
        APYvalue: number;
        totalIntAmtCrncyCode: string;
        dispatchMode: string;
        depositTermDays: number;
        acctBal: ({
            balanceType: string;
            creditDebitInd: string;
            balanceAmount: number;
            currencyCode?: undefined;
        } | {
            balanceType: string;
            creditDebitInd: string;
            balanceAmount: number;
            currencyCode: string;
        })[];
        interestCreditAcctId: string;
        accountClosureFlg: string;
        customerId: string;
        maturityAmt: number;
        totalIntAmt: number;
        depositTermMonth: number;
        customData: {
            acctCrPrefPcnt: string;
        };
    };
};
