export const MODULE_NOT_FOUND = 'MODULE_NOT_FOUND';

// Accounts
export const NO_ACCOUNT_DETAILS = (cifId: string) => ({
    errorCode: 'ACC-100',
    message: `No Accounts Found For Customer: ${cifId}`,
});

export const ACCOUNTS_GLOBAL_ERR = {
    errorCode: 'ACC-101',
    message: 'Error Fetching Account Details',
};

export const NO_BALANCE_DETAILS = (accountId: string) => ({
    errorCode: 'ACC-102',
    message: `No Balance Details Found For Account: ${accountId}`,
});

export const ACCOUNT_BALANCE_GLOBAL_ERR = {
    errorCode: 'ACC-103',
    message: 'Error Fetching Account Balance Details',
};

// Transactions
export const NO_TRANSACTION_DETAILS = (accountId: string) => ({
    errorCode: 'TRAN-100',
    message: `No Transaction Details Found For Account: ${accountId}`,
});

export const TRANSACTIONS_GLOBAL_ERROR = {
    errorCode: 'TRAN-101',
    message: 'Error Fetching Transaction Details',
};

// Loan
export const NO_LOAN_DETAILS = (cifId: string) => ({
    errorCode: 'LOAN-100',
    message: `No Loan Found For Customer: ${cifId}`,
});

export const LOANS_GLOBAL_ERR = {
    errorCode: 'LOAN-101',
    message: 'Error Fetching Loan Details',
};

// Deposits
export const DEPOSITS_GLOBAL_ERR = {
    errorCode: 'TROV-100',
    message: 'Error Fetching Deposit Details',
};
