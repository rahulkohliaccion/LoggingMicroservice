import { CreditDebitFlag, TransactionStatus } from '@common/enum/transaction.enum';
export declare class ListTransactionTO {
    CIFID: string;
    USERID: string;
    BANKID: string;
    ACCOUNTID: string;
    fromDate?: Date;
    toDate?: Date;
    minBalance?: number;
    maxBalance?: number;
    status?: TransactionStatus[];
    type?: CreditDebitFlag;
}
