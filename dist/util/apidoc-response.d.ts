import { Type } from '@nestjs/common';
export declare enum DocType {
    Array = "array",
    NULL = "null"
}
export declare const ApiDocResponse: <TModel extends Type<any>>(model: TModel, type?: string) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
