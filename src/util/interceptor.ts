import { HeaderEnum } from '@common/enum/headers.enum';
import {
    ArgumentsHost,
    CallHandler,
    Catch,
    ExceptionFilter,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface IResponse<T> {
    data: T;
    statusCode: number;
    error: string;
}

@Injectable()
export class ResponseInterceptor<T>
    implements NestInterceptor<T, IResponse<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<IResponse<T>> {
        const headers = context.switchToHttp().getRequest().headers;

        headers['ACCESSTOKEN'] = headers[HeaderEnum.ACCESSTOKEN];

        return next.handle().pipe(
            map((data) => ({
                statusCode: context.switchToHttp().getResponse().statusCode,
                data,
                error: null,
            }))
        );
    }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const details = exception.getResponse()['details'];

        response.status(status).send({
            statusCode: status,
            data: null,
            error: {
                code: exception.getResponse()['statusCode'] || status,
                message: exception.message,
                details: details !== exception.message ? details : undefined,
                timestamp: new Date().toISOString(),
                path: request.url,
            },
        });
    }
}

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((err) =>
                throwError(
                    new HttpException(
                        {
                            statusCode: err.response?.errorCode,
                            message: err.message,
                            details:
                                err.response?.details || err.response?.message,
                        },
                        err.status || HttpStatus.INTERNAL_SERVER_ERROR
                    )
                )
            )
        );
    }
}
