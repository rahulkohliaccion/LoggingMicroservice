import { AccountStatusEnum, AccountTypeEnum } from '@common/enum/account.enum';
export declare class ListAccountTO {
    status: AccountStatusEnum;
    USERID: string;
    BANKID: string;
    CIFID: string;
}
export declare class AccountBalanceTO {
    CIFID: string;
    USERID: string;
    BANKID: string;
    ACCOUNTID: string;
}
export declare class PrimaryAccountTO {
    USERID: string;
    BANKID: string;
    CIFID: string;
}
export declare class ListCustomerAccountTO {
    type: AccountTypeEnum;
    BANKID: string;
    CIFID: string;
}
