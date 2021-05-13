"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const transaction_contract_1 = require("../../../common/contract/transaction.contract");
const transaction_entity_1 = require("../../../common/entity/transaction.entity");
const transaction_enum_1 = require("../../../common/enum/transaction.enum");
const error_1 = require("../../../constant/error");
const common_1 = require("@nestjs/common");
const urlBuilder_1 = require("../urlBuilder");
let TransactionService = class TransactionService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getTransactions(params) {
        try {
            const response = await this.httpService
                .get(urlBuilder_1.LIST_TRANSACTIONS(params), {
                headers: {
                    REQUESTUUID: params.REQUESTUUID,
                    GLOBALUUID: params.GLOBALUUID,
                    BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                    ACCESSTOKEN: params.ACCESSTOKEN,
                },
            })
                .toPromise();
            return response.data.data.acctTrnInqRs.AcctTrnRec.map((t) => ({
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
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(error_1.TRANSACTIONS_GLOBAL_ERROR);
        }
    }
};
TransactionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map