"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModule = void 0;
const account_contract_1 = require("../../common/contract/account.contract");
const deposit_contract_1 = require("../../common/contract/deposit.contract");
const loan_contract_1 = require("../../common/contract/loan.contract");
const payment_contract_1 = require("../../common/contract/payment.contract");
const transaction_contract_1 = require("../../common/contract/transaction.contract");
const common_1 = require("@nestjs/common");
const account_service_1 = require("./service/account.service");
const deposit_service_1 = require("./service/deposit.service");
const loan_service_1 = require("./service/loan.service");
const payment_service_1 = require("./service/payment.service");
const transaction_service_1 = require("./service/transaction.service");
const providers = [
    { provide: transaction_contract_1.TransactionContract, useClass: transaction_service_1.MockTransactionService },
    { provide: account_contract_1.AccountContract, useClass: account_service_1.MockAccountService },
    { provide: loan_contract_1.LoanContract, useClass: loan_service_1.MockLoanService },
    { provide: deposit_contract_1.DepositContract, useClass: deposit_service_1.MockDepositService },
    { provide: payment_contract_1.PaymentContract, useClass: payment_service_1.MockPaymentService },
];
let MockModule = class MockModule {
};
MockModule = __decorate([
    common_1.Module({
        providers: providers,
        exports: providers,
    })
], MockModule);
exports.MockModule = MockModule;
//# sourceMappingURL=mock.module.js.map