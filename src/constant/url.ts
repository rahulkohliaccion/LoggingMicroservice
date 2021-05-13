// Accounts
export const LIST_ALL_ACCOUNT_URL = '/v1.0/account';

// Current
export const CREATE_CURRENT_ACCOUNT_URL = '/v1.0/current';

// Deposits
export const DEPOSIT_ACCOUNT_DETAILS_URL = '/v1.0/deposit/:accountId';

// Loan
export const LOAN_ACCOUNT_DETAILS_URL = '/v1.0/loan/:accountId';
export const LOAN_OVERDUE_URL = '/v1.0/loan/:accountId/overdue';
export const LOAN_INSTALLMENT_URL = '/v1.0/loan/:accountId/installment';
export const LOAN_OVERDUE_POSITION_URL = '/v1.0/loan/:accountId/overdue/positions';

// Transactions
export const LIST_TRANSACTION_URL = '/v1.0/current/:accountId/transaction';

// Payment
export const LIST_SCHEDULED_PAYMENTS_URL =
    '/v1.0/current/:accountId/payment/scheduled';
export const PROCESS_INTERNAL_FUND_TRANSFER_URL =
    '/v1.0/current/:accountId/payment/internal';
