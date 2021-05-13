import { Deposit } from '@common/entity/deposit.entity';
import { GetDepositDetailsDTO } from '@module/deposit/model/dto/deposit.dto';
export declare abstract class DepositContract {
    abstract getDepositDetails(params: GetDepositDetailsDTO): Promise<Deposit>;
}
