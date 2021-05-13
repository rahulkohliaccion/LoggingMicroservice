"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalanceDetails = exports.AccountDetails = void 0;
exports.AccountDetails = {
    CustomerAccountDetails: {
        AccountDetailsRec: [
            {
                acctShortName: 'Personal',
                curCode: 'USD',
                acctOpeningDate: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
                accountId: 'CA0100010105',
                acctBranchId: '295',
                masterAcctInd: 'Normal',
                multiCurrInd: 'N',
                role: 'Main Account Holder',
                acctStatus: 'Open',
                prodCategoryId: '12',
                productCode: 'SMCAA',
                productCategory: 'CAA',
            },
            {
                acctShortName: 'USD Deposit',
                curCode: 'USD',
                acctOpeningDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                accountId: 'TDA01USD10167',
                modeOfOperation: 'Online',
                acctBranchId: '295',
                masterAcctInd: 'Normal',
                multiCurrInd: 'USD',
                role: 'Main',
                acctStatus: 'Open',
                topUpInd: '546',
                prodCategoryId: '5432',
                productCode: 'SMTDA',
                productCategory: 'TDA',
            },
            {
                acctShortName: 'Lombard Loan',
                curCode: 'USD',
                acctOpeningDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                accountId: 'TDA01USD89213',
                modeOfOperation: 'Online',
                acctBranchId: '295',
                masterAcctInd: 'Normal',
                multiCurrInd: 'USD',
                role: 'Main',
                acctStatus: 'Open',
                topUpInd: '546',
                prodCategoryId: '5432',
                productCode: 'SMLAA',
                productCategory: 'LAA',
            },
        ],
    },
};
const AccountBalanceDetails = (accountId) => ({
    AcctBalDetails: {
        futureBalance: {
            amount: 1000,
            currency: 'EUR',
            crDrInd: 'cr',
        },
        clearBalance: {
            amount: 10000,
            currency: 'EUR',
            crDrInd: 'cr',
        },
        availableBalance: {
            amount: 4000 + Math.floor(Math.random() * 10000),
            currency: 'USD',
            crDrInd: 'cr',
        },
        accountId: accountId,
    },
});
exports.AccountBalanceDetails = AccountBalanceDetails;
//# sourceMappingURL=account.js.map