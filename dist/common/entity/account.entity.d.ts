import { LoanOverdue } from '@common/entity/loan.entity';
import { AccountStatusEnum, AccountTopUpIndicatorEnum, AccountTypeEnum } from './../enum/account.enum';
import { DepositInterest } from './deposit.entity';
export declare class Account {
    readonly id: string;
    readonly balance?: Balance;
    readonly shortName: string;
    readonly currencyCode: string;
    readonly multiCurrInd: string;
    readonly branchId: string;
    readonly masterAcctId: string;
    readonly role: string;
    readonly status: AccountStatusEnum;
    readonly prodCategoryId: string;
    readonly productCode: string;
    readonly productCategory: AccountTypeEnum;
    readonly topUpInd: AccountTopUpIndicatorEnum;
    readonly openingDate: Date;
    readonly closedDate: Date;
    readonly depositInterest?: DepositInterest;
    readonly loanOverdue?: LoanOverdue[];
}
export declare class AccountBalanceDetail {
    futureBalance: Balance;
    clearBalance: Balance;
    availableBalance: Balance;
    accountId: string;
}
declare class Balance {
    readonly amount: number;
    readonly currency: string;
    readonly crDrInd: string;
}
export {};
