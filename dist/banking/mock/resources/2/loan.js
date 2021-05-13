"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanOverduePositionInq = exports.LoanOverdueDetails = exports.GetLoanGenDtls = void 0;
exports.GetLoanGenDtls = {
    cICrvLoanGenDetailsOutStruct: {
        interestRate: '10.00',
        nxtPayDate: new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(1)),
        nextInstlAmt: '8791.59',
        acctOpenDate: '10-08-2020',
        loanType: 'N',
        payAheadFlg: 'N',
        daysPastDue: '0',
        loanAmtCcy: 'USD',
        loanAmt: '100000.00',
        availCrLimitCcy: '',
        nextBillDate: '',
        payOffAmtCcy: 'USD',
        payOffAmt: '93778.56',
        availCrLimit: '0.00',
        maturityDate: new Date(new Date(new Date(new Date().setFullYear(new Date().getFullYear() + 2)).setMonth(new Date().getMonth() + 1)).setDate(1)),
        totClaimedAmt: '0.00',
        totClaimedAmtCcy: '',
        nextInstlAmtCcy: 'USD',
        billFreq: '',
    },
};
exports.LoanOverdueDetails = {
    LoanOvduDmdInqRs: {
        advIntCollectedCrncy: 'USD',
        totalCollectedAmtCrncy: 'USD',
        totalCollectedAmt: 5000.59,
        advIntCollectedAmt: 0.0,
        totalLiabilityAmt: 60000 + Math.floor(Math.random() * 10000),
        numInstallCovered: 0,
        totalLiabCrncy: 'USD',
        totOverdueInstallments: 6,
        OvdueDmdRec: [
            {
                instlAmtCrncy: 'USD',
                collectionAmtCrncy: 'USD',
                collectionAmt: 0.0,
                InstlAmt: 5000.59,
                dmdEffDate: '2020-11-10T00:00:00.000',
                flowId: 'EIDEM',
                dmdType: 'E',
            },
        ],
        currOverdueInstallments: 1,
    },
};
exports.LoanOverduePositionInq = {
    LoanOvduPosInqRs: {
        laOvduPosResultRec: [
            {
                nonInterestOverDueAmt: 15874.14,
                intOverDueCrncy: 'USD',
                collectedIntCrncy: 'USD',
                acctId: 'TDA01USD89213',
                nonInterestDmdAmt: 23804.62,
                nonInterestDmdCrncy: 'USD',
                nonInterestCollectedAmt: 7930.48,
                nonInterestOverDueCrncy: 'USD',
                intDemandCrncy: 'USD',
                nonInterestCollectedCrncy: 'USD',
                intDemandAmt: 2570.15,
                intOverDueAmt: 1709.04,
                collectedIntAmt: 861.11,
            },
        ],
    },
};
//# sourceMappingURL=loan.js.map