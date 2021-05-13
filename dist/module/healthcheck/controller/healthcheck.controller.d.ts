import { HealthcheckService } from '../service/healthcheck.service';
export declare class HealthcheckController {
    private readonly healthcheckService;
    constructor(healthcheckService: HealthcheckService);
    healthCheck(): string;
}
