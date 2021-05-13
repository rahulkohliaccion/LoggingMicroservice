import { LoanContract } from '@common/contract/loan.contract';
import { Loan, LoanInstallment, LoanOverdue, LoanOverduePosition } from '@common/entity/loan.entity';
import { GetLoanAccountPositionDTO, GetLoanDetailsDTO } from '@module/loan/model/dto/loan.dto';
import { HttpService } from '@nestjs/common';
export declare class FinacleLoanService implements LoanContract {
    private httpService;
    constructor(httpService: HttpService);
    getLoanDetails(params: GetLoanDetailsDTO): Promise<Loan>;
    getLoanOverdueDetails(params: GetLoanDetailsDTO): Promise<LoanOverdue[]>;
    getLoanOverduePosition(params: GetLoanAccountPositionDTO): Promise<LoanOverduePosition[]>;
    getLoanInstallmentDetails(params: GetLoanDetailsDTO): Promise<LoanInstallment>;
}
