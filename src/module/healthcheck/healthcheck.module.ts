import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/db.module';
import { HealthcheckController } from './controller/healthcheck.controller';
import { HealthcheckService } from './service/healthcheck.service';

@Module({
    imports: [DatabaseModule],
    controllers: [HealthcheckController],
    providers: [HealthcheckService],
    exports: [],
})
export class LogModule {}
