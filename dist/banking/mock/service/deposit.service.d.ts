import { DepositContract } from '@common/contract/deposit.contract';
import { Deposit } from '@common/entity/deposit.entity';
import { GetDepositDetailsDTO } from '@module/deposit/model/dto/deposit.dto';
export declare class MockDepositService implements DepositContract {
    getDepositDetails(params: GetDepositDetailsDTO): Promise<Deposit>;
}
