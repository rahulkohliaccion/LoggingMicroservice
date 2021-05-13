import { PaymentContract } from '@common/contract/payment.contract';
import { ProcessFund, ScheduledPayment } from '@common/entity/payment.entity';
import { FundTransferBodyDTO, GetScheduledPaymentsDTO, InternalPaymentDTO } from '@module/payment/model/dto/payment.dto';
import { HttpService } from '@nestjs/common';
export declare class PaymentService implements PaymentContract {
    private httpService;
    constructor(httpService: HttpService);
    processFunds(data: InternalPaymentDTO, body: FundTransferBodyDTO): Promise<ProcessFund>;
    getScheduledPayments(params: GetScheduledPaymentsDTO): Promise<ScheduledPayment[]>;
}
