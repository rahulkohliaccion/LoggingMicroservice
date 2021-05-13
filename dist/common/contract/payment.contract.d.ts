import { FundTransferBodyDTO, GetScheduledPaymentsDTO, InternalPaymentDTO } from '@module/payment/model/dto/payment.dto';
import { ProcessFund, ScheduledPayment } from './../entity/payment.entity';
export declare abstract class PaymentContract {
    abstract getScheduledPayments(data: GetScheduledPaymentsDTO): Promise<ScheduledPayment[]>;
    abstract processFunds(data: InternalPaymentDTO, body: FundTransferBodyDTO): Promise<ProcessFund>;
}
