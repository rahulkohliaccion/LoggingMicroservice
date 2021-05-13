"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockTransactionService = void 0;
const transaction_contract_1 = require("../../../common/contract/transaction.contract");
const transaction_entity_1 = require("../../../common/entity/transaction.entity");
const transaction_enum_1 = require("../../../common/enum/transaction.enum");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
let MockTransactionService = class MockTransactionService {
    getTransactions(data) {
        try {
            const resource = require(`../resources/${data.CIFID}/transaction`)
                .default;
            let transactions = [];
            transactions = resource.acctTrnInqRs.AcctTrnRec.map((t) => ({
                id: t.tranId,
                type: transaction_enum_1.TransactionType[t.tranType],
                amount: t.tranAmount,
                currency: t.tranCcy,
                status: transaction_enum_1.TransactionStatus[t.tranStatus],
                particulars: t.tranParticulars,
                partDescription: t.partTranDesc,
                codeDescription: t.tranCodeDesc,
                creditDebitFlg: transaction_enum_1.CreditDebitFlag[t.creditDebitFlg],
                createdOn: new Date(t.tranDate),
                updatedOn: new Date(t.valueDate),
            }));
            if (data.minBalance) {
                transactions = transactions.filter((t) => t.amount >= data.minBalance);
            }
            if (data.maxBalance) {
                transactions = transactions.filter((t) => t.amount <= data.maxBalance);
            }
            if (data.fromDate) {
                transactions = transactions.filter((t) => t.createdOn.getTime() >=
                    new Date(data.fromDate).getTime());
            }
            if (data.toDate) {
                transactions = transactions.filter((t) => t.createdOn.getTime() <= new Date(data.toDate).getTime());
            }
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(transactions);
                }, 2000);
            });
        }
        catch (err) {
            if (err.code === error_1.MODULE_NOT_FOUND) {
                throw new common_1.BadRequestException(error_1.NO_TRANSACTION_DETAILS(data.accountId));
            }
            throw new common_1.InternalServerErrorException(error_1.ACCOUNTS_GLOBAL_ERR);
        }
    }
};
MockTransactionService = __decorate([
    common_1.Injectable()
], MockTransactionService);
exports.MockTransactionService = MockTransactionService;
//# sourceMappingURL=transaction.service.js.map