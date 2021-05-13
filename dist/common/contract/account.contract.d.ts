import { GetAccountBalanceDTO, ListCustomerAccountDTO, CurrentAccountAddRsDTO, CreateCurrentAccountDTO } from '@module/account/model/account.dto';
import { Account, AccountBalanceDetail } from './../entity/account.entity';
export declare abstract class AccountContract {
    abstract getCustomerAccountList(data: ListCustomerAccountDTO): Promise<Account[]>;
    abstract getAccountBalanceDetails(data: GetAccountBalanceDTO): Promise<AccountBalanceDetail>;
    abstract createCurrentAccount(data: CreateCurrentAccountDTO): Promise<CurrentAccountAddRsDTO>;
}
