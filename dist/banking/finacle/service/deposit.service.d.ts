import { DepositContract } from '@common/contract/deposit.contract';
import { Deposit } from '@common/entity/deposit.entity';
import { GetDepositDetailsDTO } from '@module/deposit/model/dto/deposit.dto';
import { HttpService } from '@nestjs/common';
export declare class FinacleDepositService implements DepositContract {
    private httpService;
    constructor(httpService: HttpService);
    getDepositDetails(params: GetDepositDetailsDTO): Promise<Deposit>;
}
