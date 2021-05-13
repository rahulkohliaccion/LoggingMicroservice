import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'fastify-compress';
import { AppModule } from './app.module';
import {
    ErrorsInterceptor,
    HttpExceptionFilter,
    ResponseInterceptor,
} from './util/interceptor';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true })
    );

    app.enableCors();

    app.register(compression);

    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalInterceptors(new ErrorsInterceptor());

    const config = new DocumentBuilder()
        .setTitle('IFSG: Logging MS')
        .setDescription(
            'This service is build for log specific integration and collaborately forwards logs them to a persistant storage'
        )
        .setVersion('1.0');

    if (process.env.NODE_ENV === 'production') {
        config.addServer('/banking');
    }
    app.connectMicroservice({
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [`${process.env.KAFKA_BROKERS}`]
          },
          consumer: {
            groupId: 'my-kafka-cluster'
          }
        }
      })
    const document = SwaggerModule.createDocument(app, config.build());

    SwaggerModule.setup('api', app, document);
    await app.startAllMicroservicesAsync();
    await app.listen(parseInt(process.env.SERVICE_PORT, 10) || 3000, '0.0.0.0');
}
bootstrap();
