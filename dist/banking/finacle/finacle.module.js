"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinacleModule = void 0;
const payment_contract_1 = require("../../common/contract/payment.contract");
const account_contract_1 = require("../../common/contract/account.contract");
const deposit_contract_1 = require("../../common/contract/deposit.contract");
const loan_contract_1 = require("../../common/contract/loan.contract");
const transaction_contract_1 = require("../../common/contract/transaction.contract");
const common_1 = require("@nestjs/common");
const account_service_1 = require("./service/account.service");
const deposit_service_1 = require("./service/deposit.service");
const loan_service_1 = require("./service/loan.service");
const transaction_service_1 = require("./service/transaction.service");
const payment_service_1 = require("./service/payment.service");
const providers = [
    { provide: transaction_contract_1.TransactionContract, useClass: transaction_service_1.TransactionService },
    { provide: account_contract_1.AccountContract, useClass: account_service_1.AccountService },
    { provide: loan_contract_1.LoanContract, useClass: loan_service_1.FinacleLoanService },
    { provide: deposit_contract_1.DepositContract, useClass: deposit_service_1.FinacleDepositService },
    { provide: payment_contract_1.PaymentContract, useClass: payment_service_1.PaymentService },
];
let FinacleModule = class FinacleModule {
};
FinacleModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule.register({})],
        providers: providers,
        exports: providers,
    })
], FinacleModule);
exports.FinacleModule = FinacleModule;
//# sourceMappingURL=finacle.module.js.map