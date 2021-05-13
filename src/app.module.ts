import { LogModule } from '@module/log/log.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthcheckController } from './module/healthcheck/controller/healthcheck.controller';
import { HealthcheckService } from './module/healthcheck/service/healthcheck.service';
import config from 'src/config';
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
            cache: true,
            isGlobal: true,
        }),
        LogModule,
    ],
    controllers: [HealthcheckController],
    providers: [HealthcheckService],
})
export class AppModule {}
