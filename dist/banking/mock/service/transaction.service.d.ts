import { TransactionContract } from '@common/contract/transaction.contract';
import { Transaction } from '@common/entity/transaction.entity';
import { ListTransactionDTO } from '@module/transaction/model/dto/transaction.dto';
export declare class MockTransactionService implements TransactionContract {
    getTransactions(data: ListTransactionDTO): Promise<Transaction[]>;
}
