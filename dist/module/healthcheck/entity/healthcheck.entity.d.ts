import { ObjectID } from 'typeorm';
export declare class LogEntity {
    id: ObjectID;
    level: string;
    channel: string;
    corelationId: string;
    userId: string;
    Operation: String;
    message: string;
}
