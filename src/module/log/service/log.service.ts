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
        Logger.debug(`${JSON.stringify(logger.value.log)}`)
        try {
            await this.logRepository.save(logger.value.log)
        }
        catch (error) { Logger.error(error) }
    }

    async saveDebugLogs(logger) {
        Logger.debug(`${JSON.stringify(logger.value.log)}`)
        try {
            await this.logRepository.save(logger.value.log)
        }
        catch (error) { Logger.error(error) }
    }

    async saveVerboseLogs(logger) {
        Logger.debug(`${JSON.stringify(logger.value.log)}`)
        try {
            await this.logRepository.save(logger.value.log)
        }
        catch (error) { Logger.error(error) }
    }

    async saveErrorLogs(logger) {
        Logger.debug(`${JSON.stringify(logger.value.log)}`)
        try {
            await this.logRepository.save(logger.value.log)
        }
        catch (error) { Logger.error(error) }
    }

    async saveFatalLogs(logger) {
        Logger.debug(`${JSON.stringify(logger.value.log)}`)
        try {
            await this.logRepository.save(logger.value.log)
        }
        catch (error) { Logger.error(error) }
    }

}
