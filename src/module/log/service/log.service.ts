import { LOG_REPOSITORY } from '@constant/provider';
import { Logger, Inject, Injectable } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { LogEntity } from '../entity/log.entity';
import log from '../log';

// @Injectable()
export class LogService {
    constructor(
        @Inject(LOG_REPOSITORY)
        private readonly logRepository: Repository<LogEntity>
    ) { }

    async saveInfoLogs(logger) {
        Logger.log(`log here -> ${JSON.stringify(logger.value)}`)
        this.logRepository.save(logger.value)
        .catch(error => Logger.log(error))
    }

    async saveDebugLogs(logger) {
        // Logger.log(`log here -> ${JSON.stringify(logger.value)}`)
        this.logRepository.save(logger.value)
        .catch(error => Logger.log(error))
    }

    async saveVerboseLogs(logger) {
        // Logger.log(`log here -> ${JSON.stringify(logger.value)}`)
        this.logRepository.save(logger.value)
        .catch(error => Logger.log(error))
    }
    
    async saveErrorLogs(logger) {
        // Logger.log(`log here -> ${JSON.stringify(logger.value)}`)
        this.logRepository.save(logger.value)
        .catch(error => Logger.log(error))
    }

    async saveFatalLogs(logger) {
        // Logger.log(`log here -> ${JSON.stringify(logger.value)}`)
        this.logRepository.save(logger.value)
        .catch(error => Logger.log(error))
    }

}
