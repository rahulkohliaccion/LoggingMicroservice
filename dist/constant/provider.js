"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FATAL_LOG_TOPIC = exports.VERBOSE_LOG_TOPIC = exports.ERROR_LOG_TOPIC = exports.DEBUG_LOG_TOPIC = exports.INFO_LOG_TOPIC = exports.LOG_REPOSITORY = exports.COUNTRY_REPOSITORY = exports.DATABASE_CONNECTION = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.DATABASE_CONNECTION = 'DATABASE_CONNECTION';
exports.COUNTRY_REPOSITORY = 'COUNTRY_REPOSITORY';
exports.LOG_REPOSITORY = 'LOG_REPOSITORY';
const INFO_LOG_TOPIC = () => process.env.INFO_LOG_TOPIC;
exports.INFO_LOG_TOPIC = INFO_LOG_TOPIC;
const DEBUG_LOG_TOPIC = () => process.env.DEBUG_LOG_TOPIC;
exports.DEBUG_LOG_TOPIC = DEBUG_LOG_TOPIC;
const ERROR_LOG_TOPIC = () => process.env.ERROR_LOG_TOPIC;
exports.ERROR_LOG_TOPIC = ERROR_LOG_TOPIC;
const VERBOSE_LOG_TOPIC = () => process.env.VERBOSE_LOG_TOPIC;
exports.VERBOSE_LOG_TOPIC = VERBOSE_LOG_TOPIC;
const FATAL_LOG_TOPIC = () => process.env.FATAL_LOG_TOPIC;
exports.FATAL_LOG_TOPIC = FATAL_LOG_TOPIC;
//# sourceMappingURL=provider.js.map