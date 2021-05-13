"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPaymentService = void 0;
const payment_contract_1 = require("../../../common/contract/payment.contract");
const payment_entity_1 = require("../../../common/entity/payment.entity");
const common_1 = require("@nestjs/common");
let MockPaymentService = class MockPaymentService {
    processFunds(data, body) {
        return null;
    }
    getScheduledPayments(data) {
        const resource = require(`../resources/${data.USERID}/payment`)
            .default;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resource.FetchSchedTranRs.SchedTranRec.map((t) => ({
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
                })));
            }, 2000);
        });
    }
};
MockPaymentService = __decorate([
    common_1.Injectable({})
], MockPaymentService);
exports.MockPaymentService = MockPaymentService;
//# sourceMappingURL=payment.service.js.map