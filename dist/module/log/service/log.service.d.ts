import { Repository } from 'typeorm';
import { LogEntity } from '../entity/log.entity';
export declare class LogService {
    private readonly logRepository;
    constructor(logRepository: Repository<LogEntity>);
    saveInfoLogs(logger: any): Promise<void>;
    saveDebugLogs(logger: any): Promise<void>;
    saveVerboseLogs(logger: any): Promise<void>;
    saveErrorLogs(logger: any): Promise<void>;
    saveFatalLogs(logger: any): Promise<void>;
}
