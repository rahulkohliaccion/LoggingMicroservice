import * as dotenv from 'dotenv';
dotenv.config()

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
export const COUNTRY_REPOSITORY = 'COUNTRY_REPOSITORY';
export const LOG_REPOSITORY = 'LOG_REPOSITORY';
export const INFO_LOG_TOPIC = () => process.env.INFO_LOG_TOPIC;
export const DEBUG_LOG_TOPIC = () => process.env.DEBUG_LOG_TOPIC;
export const ERROR_LOG_TOPIC = () => process.env.ERROR_LOG_TOPIC;
export const VERBOSE_LOG_TOPIC = () => process.env.VERBOSE_LOG_TOPIC;
export const FATAL_LOG_TOPIC = () => process.env.FATAL_LOG_TOPIC;
