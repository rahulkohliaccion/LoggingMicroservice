import { AccountContract } from '@common/contract/account.contract';
import { Account, AccountBalanceDetail } from '@common/entity/account.entity';
import { CreateCurrentAccountDTO, CurrentAccountAddRsDTO, GetAccountBalanceDTO, ListCustomerAccountDTO } from '@module/account/model/account.dto';
import { HttpService } from '@nestjs/common';
export declare class AccountService implements AccountContract {
    private httpService;
    constructor(httpService: HttpService);
    getCustomerAccountList(params: ListCustomerAccountDTO): Promise<Account[]>;
    getAccountBalanceDetails(params: GetAccountBalanceDTO): Promise<AccountBalanceDetail>;
    createCurrentAccount(params: CreateCurrentAccountDTO): Promise<CurrentAccountAddRsDTO>;
}
