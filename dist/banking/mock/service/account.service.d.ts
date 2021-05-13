import { AccountContract } from '@common/contract/account.contract';
import { Account, AccountBalanceDetail } from '@common/entity/account.entity';
import { CreateCurrentAccountDTO, CurrentAccountAddRsDTO, GetAccountBalanceDTO, ListCustomerAccountDTO } from '@module/account/model/account.dto';
export declare class MockAccountService implements AccountContract {
    getCustomerAccountList(data: ListCustomerAccountDTO): Promise<Account[]>;
    createCurrentAccount(data: CreateCurrentAccountDTO): Promise<CurrentAccountAddRsDTO>;
    getAccountBalanceDetails(data: GetAccountBalanceDTO): Promise<AccountBalanceDetail>;
}
