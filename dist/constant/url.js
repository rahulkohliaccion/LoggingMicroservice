"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROCESS_INTERNAL_FUND_TRANSFER_URL = exports.LIST_SCHEDULED_PAYMENTS_URL = exports.LIST_TRANSACTION_URL = exports.LOAN_OVERDUE_POSITION_URL = exports.LOAN_INSTALLMENT_URL = exports.LOAN_OVERDUE_URL = exports.LOAN_ACCOUNT_DETAILS_URL = exports.DEPOSIT_ACCOUNT_DETAILS_URL = exports.CREATE_CURRENT_ACCOUNT_URL = exports.LIST_ALL_ACCOUNT_URL = void 0;
exports.LIST_ALL_ACCOUNT_URL = '/v1.0/account';
exports.CREATE_CURRENT_ACCOUNT_URL = '/v1.0/current';
exports.DEPOSIT_ACCOUNT_DETAILS_URL = '/v1.0/deposit/:accountId';
exports.LOAN_ACCOUNT_DETAILS_URL = '/v1.0/loan/:accountId';
exports.LOAN_OVERDUE_URL = '/v1.0/loan/:accountId/overdue';
exports.LOAN_INSTALLMENT_URL = '/v1.0/loan/:accountId/installment';
exports.LOAN_OVERDUE_POSITION_URL = '/v1.0/loan/:accountId/overdue/positions';
exports.LIST_TRANSACTION_URL = '/v1.0/current/:accountId/transaction';
exports.LIST_SCHEDULED_PAYMENTS_URL = '/v1.0/current/:accountId/payment/scheduled';
exports.PROCESS_INTERNAL_FUND_TRANSFER_URL = '/v1.0/current/:accountId/payment/internal';
//# sourceMappingURL=url.js.map