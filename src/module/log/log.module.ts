import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/db.module';
import { LogController } from './controller/log.controller';
import { logProviders } from './log.provider';
import { LogService } from './service/log.service';

@Module({
    imports: [DatabaseModule],
    controllers: [LogController],
    providers: [...logProviders, LogService],
    exports: [...logProviders],
})
export class LogModule {}
