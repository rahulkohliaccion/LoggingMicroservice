import { CreditDebitFlag, TransactionStatus, TransactionType } from '../enum/transaction.enum';
export declare class Transaction {
    readonly id: string;
    readonly type: TransactionType;
    readonly currency: string;
    readonly particulars: string;
    readonly amount: number;
    readonly creditDebitFlg: CreditDebitFlag;
    readonly status: TransactionStatus;
    readonly codeDescription: string;
    readonly partDescription: string;
    readonly createdOn?: Date;
    readonly updatedOn?: Date;
}
