import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { CurrencyDTO } from '../model/dto/log.dto';
import { LogService } from '../service/log.service';
import { INFO_LOG_TOPIC, DEBUG_LOG_TOPIC, VERBOSE_LOG_TOPIC, FATAL_LOG_TOPIC, ERROR_LOG_TOPIC } from '@constant/provider'
import { Transport, MessagePattern } from '@nestjs/microservices';

@Controller()
export class LogController {
    constructor(private readonly logService: LogService) {}

    @MessagePattern(INFO_LOG_TOPIC(), Transport.KAFKA)
    addInfoLog(@Body() body:any ): any {
        return this.logService.saveInfoLogs(body)
    }

    @MessagePattern(DEBUG_LOG_TOPIC(), Transport.KAFKA)
    addDebugLog(@Body() body:any ): any {
        return this.logService.saveDebugLogs(body)
    }

    @MessagePattern(VERBOSE_LOG_TOPIC(), Transport.KAFKA)
    addVerboseLog(@Body() body:any ): any {
        return this.logService.saveVerboseLogs(body)
    }

    @MessagePattern(ERROR_LOG_TOPIC(), Transport.KAFKA)
    addErrorLog(@Body() body:any ): any {
        return this.logService.saveErrorLogs(body)
    }

    @MessagePattern(FATAL_LOG_TOPIC(), Transport.KAFKA)
    addFatalLog(@Body() body:any ): any {
        return this.logService.saveFatalLogs(body)
    }
}
