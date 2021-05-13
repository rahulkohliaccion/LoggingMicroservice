import { ConfigService } from '@nestjs/config';
export declare const databaseProviders: {
    provide: string;
    useFactory: (config: ConfigService) => Promise<import("typeorm").Connection>;
    inject: (typeof ConfigService)[];
}[];
