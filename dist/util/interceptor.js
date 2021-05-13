"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInterceptor = exports.HttpExceptionFilter = exports.ResponseInterceptor = void 0;
const headers_enum_1 = require("../common/enum/headers.enum");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        const headers = context.switchToHttp().getRequest().headers;
        headers['ACCESSTOKEN'] = headers[headers_enum_1.HeaderEnum.ACCESSTOKEN];
        return next.handle().pipe(operators_1.map((data) => ({
            statusCode: context.switchToHttp().getResponse().statusCode,
            data,
            error: null,
        })));
    }
};
ResponseInterceptor = __decorate([
    common_1.Injectable()
], ResponseInterceptor);
exports.ResponseInterceptor = ResponseInterceptor;
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
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
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.catchError((err) => {
            var _a, _b, _c;
            return rxjs_1.throwError(new common_1.HttpException({
                statusCode: (_a = err.response) === null || _a === void 0 ? void 0 : _a.errorCode,
                message: err.message,
                details: ((_b = err.response) === null || _b === void 0 ? void 0 : _b.details) || ((_c = err.response) === null || _c === void 0 ? void 0 : _c.message),
            }, err.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        }));
    }
};
ErrorsInterceptor = __decorate([
    common_1.Injectable()
], ErrorsInterceptor);
exports.ErrorsInterceptor = ErrorsInterceptor;
//# sourceMappingURL=interceptor.js.map