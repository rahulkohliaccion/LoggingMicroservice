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
exports.PaymentService = void 0;
const payment_contract_1 = require("../../../common/contract/payment.contract");
const payment_entity_1 = require("../../../common/entity/payment.entity");
const common_1 = require("@nestjs/common");
const urlBuilder_1 = require("./../urlBuilder");
let PaymentService = class PaymentService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    processFunds(data, body) {
        throw new Error('Method not implemented.');
    }
    async getScheduledPayments(params) {
        const response = await this.httpService
            .get(urlBuilder_1.LIST_SCHEDULED_PAYMENT_DETAILS(params), {
            headers: {
                REQUESTUUID: params.REQUESTUUID,
                GLOBALUUID: params.GLOBALUUID,
                BUSINESSCHANNELID: params.BUSINESSCHANNELID,
                ACCESSTOKEN: params.ACCESSTOKEN,
            },
        })
            .toPromise();
        return response.data.data.FetchSchedTranRs.SchedTranRec.map((t) => ({
            amount: t.SchedTranRec.Amount,
            currency: t.SchedTranRec.Currency,
            transferMethod: t.SchedTranRec.Method,
            transferType: t.SchedTranRec.TransferType,
            scheduledDt: t.SchedTranRec.ScheduledDt,
            reason: t.SchedTranRec.Reason,
            endDt: t.SchedTranRec.EndDt,
            serialNumber: t.SchedTranRec.SerialNum,
            frequencyType: t.SchedTranRec.FrequencyType,
            FrequencyStartDate: t.SchedTranRec.FrequencyStartDate,
            FrequencyWeekDay: t.SchedTranRec.FrequencyWeekDay,
            frequencyWeekNumber: t.SchedTranRec.FrequencyWeekNum,
        }));
    }
};
PaymentService = __decorate([
    common_1.Injectable({}),
    __metadata("design:paramtypes", [common_1.HttpService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map