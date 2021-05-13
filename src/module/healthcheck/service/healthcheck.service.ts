import { Logger, Inject, Injectable } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';

@Injectable()
export class HealthcheckService {

    getHello() {
        return 'The Health of this service is fine';
    }
}
