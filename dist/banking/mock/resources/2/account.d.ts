export declare const AccountDetails: {
    CustomerAccountDetails: {
        AccountDetailsRec: ({
            acctShortName: string;
            curCode: string;
            acctOpeningDate: Date;
            accountId: string;
            acctBranchId: string;
            masterAcctInd: string;
            multiCurrInd: string;
            role: string;
            acctStatus: string;
            prodCategoryId: string;
            productCode: string;
            productCategory: string;
            acctClosedDate?: undefined;
            modeOfOperation?: undefined;
            topUpInd?: undefined;
        } | {
            acctShortName: string;
            curCode: string;
            acctOpeningDate: Date;
            accountId: string;
            acctBranchId: string;
            masterAcctInd: string;
            multiCurrInd: string;
            role: string;
            acctStatus: string;
            acctClosedDate: Date;
            prodCategoryId: string;
            productCode: string;
            productCategory: string;
            modeOfOperation?: undefined;
            topUpInd?: undefined;
        } | {
            acctShortName: string;
            curCode: string;
            acctOpeningDate: Date;
            accountId: string;
            modeOfOperation: string;
            acctBranchId: string;
            masterAcctInd: string;
            multiCurrInd: string;
            role: string;
            acctStatus: string;
            topUpInd: string;
            prodCategoryId: string;
            productCode: string;
            productCategory: string;
            acctClosedDate?: undefined;
        } | {
            acctShortName: string;
            curCode: string;
            acctOpeningDate: Date;
            acctClosedDate: Date;
            accountId: string;
            modeOfOperation: string;
            acctBranchId: string;
            masterAcctInd: string;
            multiCurrInd: string;
            role: string;
            acctStatus: string;
            topUpInd: string;
            prodCategoryId: string;
            productCode: string;
            productCategory: string;
        })[];
    };
};
export declare const AccountBalanceDetails: (accountId: string) => {
    AcctBalDetails: {
        futureBalance: {
            amount: number;
            currency: string;
            crDrInd: string;
        };
        clearBalance: {
            amount: number;
            currency: string;
            crDrInd: string;
        };
        availableBalance: {
            amount: number;
            currency: string;
            crDrInd: string;
        };
        accountId: string;
    };
};
