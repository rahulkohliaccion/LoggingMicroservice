import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { HealthcheckService } from '../service/healthcheck.service';

@Controller()
export class HealthcheckController {
    constructor(private readonly healthcheckService: HealthcheckService) {}

    @Get('/healthcheck')
    healthCheck(){
        return this.healthcheckService.getHello()
    }
}
