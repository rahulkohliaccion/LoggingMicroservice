import { ListTransactionDTO } from '@module/transaction/model/dto/transaction.dto';
import { Transaction } from '../entity/transaction.entity';
export declare abstract class TransactionContract {
    abstract getTransactions(data: ListTransactionDTO): Promise<Transaction[]>;
}
