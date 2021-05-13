import { PaymentContract } from '@common/contract/payment.contract';
import { ProcessFund, ScheduledPayment } from '@common/entity/payment.entity';
import { FundTransferBodyDTO, GetScheduledPaymentsDTO, InternalPaymentDTO } from '@module/payment/model/dto/payment.dto';
export declare class MockPaymentService implements PaymentContract {
    processFunds(data: InternalPaymentDTO, body: FundTransferBodyDTO): Promise<ProcessFund>;
    getScheduledPayments(data: GetScheduledPaymentsDTO): Promise<ScheduledPayment[]>;
}
