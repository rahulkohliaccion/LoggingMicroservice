export declare class AccountDTO {
    readonly CustomerAccountDetails: CustomerAccountDetailsDTO;
}
declare class CustomerAccountDetailsDTO {
    readonly AccountDetailsRec: AccountDetailsRec[];
}
export declare class AccountDetailsRec {
    readonly acctShortName: string;
    readonly curCode: string;
    readonly acctOpeningDate: Date;
    readonly accountId: string;
    readonly acctBranchId: string;
    readonly masterAcctInd: string;
    readonly multiCurrInd: string;
    readonly role: string;
    readonly acctStatus: string;
    readonly acctClosedDate: Date;
    readonly topUpInd: string;
    readonly prodCategoryId: string;
    readonly productCode: string;
    readonly productCategory: string;
}
export declare class AccountBalanceDetailDTO {
    readonly AcctBalDetails: AcctBalDetails;
}
declare class AcctBalDetails {
    readonly futureBalance: Balance;
    readonly clearBalance: Balance;
    readonly availableBalance: Balance;
    readonly accountId: string;
}
declare class Balance {
    readonly amount: number;
    readonly currency: string;
    readonly crDrInd: string;
}
export declare class CreateCurrentAccountRs {
    readonly accountId: string;
}
export {};
