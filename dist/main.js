"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const swagger_1 = require("@nestjs/swagger");
const fastify_compress_1 = require("fastify-compress");
const app_module_1 = require("./app.module");
const interceptor_1 = require("./util/interceptor");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: true }));
    app.enableCors();
    app.register(fastify_compress_1.default);
    app.useGlobalFilters(new interceptor_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new interceptor_1.ResponseInterceptor());
    app.useGlobalInterceptors(new interceptor_1.ErrorsInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('IFSG: Logging MS')
        .setDescription('This service is build for log specific integration and collaborately forwards logs them to a persistant storage')
        .setVersion('1.0');
    if (process.env.NODE_ENV === 'production') {
        config.addServer('/banking');
    }
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: [`${process.env.KAFKA_BROKERS}`]
            },
            consumer: {
                groupId: 'my-kafka-cluster'
            }
        }
    });
    const document = swagger_1.SwaggerModule.createDocument(app, config.build());
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.startAllMicroservicesAsync();
    await app.listen(parseInt(process.env.SERVICE_PORT, 10) || 3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map