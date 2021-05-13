import { Loan, LoanInstallment, LoanOverdue, LoanOverduePosition } from '@common/entity/loan.entity';
import { GetLoanAccountPositionDTO, GetLoanDetailsDTO } from '@module/loan/model/dto/loan.dto';
export declare abstract class LoanContract {
    abstract getLoanDetails(params: GetLoanDetailsDTO): Promise<Loan>;
    abstract getLoanOverdueDetails(params: GetLoanDetailsDTO): Promise<LoanOverdue[]>;
    abstract getLoanOverduePosition(params: GetLoanAccountPositionDTO): Promise<LoanOverduePosition[]>;
    abstract getLoanInstallmentDetails(params: GetLoanDetailsDTO): Promise<LoanInstallment>;
}
