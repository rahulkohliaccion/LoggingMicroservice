"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_SCHEDULED_PAYMENT_DETAILS = exports.LIST_TRANSACTIONS = exports.GET_LOAN_DUE_POSITION_DETAILS = exports.GET_GENERAL_LOAN_DETAILS = exports.GET_LOAN_DUE_DETAILS = exports.GET_DEPOSIT_ACCOUNT_DETAILS = exports.CREATE_CURRENT_ACCOUNT = exports.GET_ACCOUNT_BALANCE_DETAIL = exports.GET_CUSTOMER_ACCOUNT_LIST = exports.FINACLE_BASE_URL = void 0;
exports.FINACLE_BASE_URL = `http://localhost:8082/finbranch/FIP/V1.0`;
const GET_CUSTOMER_ACCOUNT_LIST = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/customer/retail/${data.CIFID}/accounts`;
exports.GET_CUSTOMER_ACCOUNT_LIST = GET_CUSTOMER_ACCOUNT_LIST;
const GET_ACCOUNT_BALANCE_DETAIL = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/customer/accounts/${data.accountId}/balance`;
exports.GET_ACCOUNT_BALANCE_DETAIL = GET_ACCOUNT_BALANCE_DETAIL;
const CREATE_CURRENT_ACCOUNT = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/currentaccount`;
exports.CREATE_CURRENT_ACCOUNT = CREATE_CURRENT_ACCOUNT;
const GET_DEPOSIT_ACCOUNT_DETAILS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/accounts/${data.accountId}`;
exports.GET_DEPOSIT_ACCOUNT_DETAILS = GET_DEPOSIT_ACCOUNT_DETAILS;
const GET_LOAN_DUE_DETAILS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/loans/${data.accountId}/LoanOvduDmdInq?asOnDate=${data.asOnDate}`;
exports.GET_LOAN_DUE_DETAILS = GET_LOAN_DUE_DETAILS;
const GET_GENERAL_LOAN_DETAILS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/loans/${data.accountId}/Action=GetLoanGenDtls`;
exports.GET_GENERAL_LOAN_DETAILS = GET_GENERAL_LOAN_DETAILS;
const GET_LOAN_DUE_POSITION_DETAILS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/loans/LoanOverduePositionInq?acctCrncyCode=${data.currencyCode}&asOnDate=${data.asOnDate}&solId=${data.solId}`;
exports.GET_LOAN_DUE_POSITION_DETAILS = GET_LOAN_DUE_POSITION_DETAILS;
const LIST_TRANSACTIONS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/savings/accounts/${data.accountId}/transactions`;
exports.LIST_TRANSACTIONS = LIST_TRANSACTIONS;
const LIST_SCHEDULED_PAYMENT_DETAILS = (data) => `${exports.FINACLE_BASE_URL}/banks/${data.BANKID}/deposits/account/${data.accountId}`;
exports.LIST_SCHEDULED_PAYMENT_DETAILS = LIST_SCHEDULED_PAYMENT_DETAILS;
//# sourceMappingURL=urlBuilder.js.map