import { TransactionContract } from '@common/contract/transaction.contract';
import { Transaction } from '@common/entity/transaction.entity';
import { ListTransactionDTO } from '@module/transaction/model/dto/transaction.dto';
import { HttpService } from '@nestjs/common';
export declare class TransactionService implements TransactionContract {
    private httpService;
    constructor(httpService: HttpService);
    getTransactions(params: ListTransactionDTO): Promise<Transaction[]>;
}
