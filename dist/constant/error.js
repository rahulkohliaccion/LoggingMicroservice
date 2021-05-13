"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEPOSITS_GLOBAL_ERR = exports.LOANS_GLOBAL_ERR = exports.NO_LOAN_DETAILS = exports.TRANSACTIONS_GLOBAL_ERROR = exports.NO_TRANSACTION_DETAILS = exports.ACCOUNT_BALANCE_GLOBAL_ERR = exports.NO_BALANCE_DETAILS = exports.ACCOUNTS_GLOBAL_ERR = exports.NO_ACCOUNT_DETAILS = exports.MODULE_NOT_FOUND = void 0;
exports.MODULE_NOT_FOUND = 'MODULE_NOT_FOUND';
const NO_ACCOUNT_DETAILS = (cifId) => ({
    errorCode: 'ACC-100',
    message: `No Accounts Found For Customer: ${cifId}`,
});
exports.NO_ACCOUNT_DETAILS = NO_ACCOUNT_DETAILS;
exports.ACCOUNTS_GLOBAL_ERR = {
    errorCode: 'ACC-101',
    message: 'Error Fetching Account Details',
};
const NO_BALANCE_DETAILS = (accountId) => ({
    errorCode: 'ACC-102',
    message: `No Balance Details Found For Account: ${accountId}`,
});
exports.NO_BALANCE_DETAILS = NO_BALANCE_DETAILS;
exports.ACCOUNT_BALANCE_GLOBAL_ERR = {
    errorCode: 'ACC-103',
    message: 'Error Fetching Account Balance Details',
};
const NO_TRANSACTION_DETAILS = (accountId) => ({
    errorCode: 'TRAN-100',
    message: `No Transaction Details Found For Account: ${accountId}`,
});
exports.NO_TRANSACTION_DETAILS = NO_TRANSACTION_DETAILS;
exports.TRANSACTIONS_GLOBAL_ERROR = {
    errorCode: 'TRAN-101',
    message: 'Error Fetching Transaction Details',
};
const NO_LOAN_DETAILS = (cifId) => ({
    errorCode: 'LOAN-100',
    message: `No Loan Found For Customer: ${cifId}`,
});
exports.NO_LOAN_DETAILS = NO_LOAN_DETAILS;
exports.LOANS_GLOBAL_ERR = {
    errorCode: 'LOAN-101',
    message: 'Error Fetching Loan Details',
};
exports.DEPOSITS_GLOBAL_ERR = {
    errorCode: 'TROV-100',
    message: 'Error Fetching Deposit Details',
};
//# sourceMappingURL=error.js.map