import { FundTransferBodyDTO } from '@module/payment/model/dto/payment.dto';
export declare class ScheduledPaymentTO {
    readonly BANKID: string;
    readonly ACCOUNTID: string;
    readonly USERID: string;
}
export declare class FundTransferTO {
    readonly BANKID: string;
    readonly ACCOUNTID: string;
    readonly USERID: string;
    readonly body: FundTransferBodyDTO;
}
