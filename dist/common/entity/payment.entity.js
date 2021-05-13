"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessFund = exports.ScheduledPayment = void 0;
const openapi = require("@nestjs/swagger");
class ScheduledPayment {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number, description: "Payment Amount" }, currency: { required: true, type: () => String, description: "Payment Currency" }, transferMethod: { required: true, type: () => String, description: "Transfer Method" }, transferType: { required: true, type: () => String, description: "Transfer Type" }, scheduledDt: { required: true, type: () => Date, description: "Scheduled DateTime" }, serialNumber: { required: true, type: () => Number, description: "Serial Number" }, reason: { required: true, type: () => String, description: "Tranfer Reason" }, endDt: { required: true, type: () => Date, description: "End Date" }, frequencyType: { required: true, type: () => String, description: "Frequency Type" }, frequencyWeekNumber: { required: true, type: () => Number, description: "Frequency Week Number" }, FrequencyWeekDay: { required: true, type: () => Number, description: "Frequency Week Day" }, FrequencyStartDate: { required: true, type: () => Date, description: "Frequency End Date" } };
    }
}
exports.ScheduledPayment = ScheduledPayment;
class ProcessFund {
    static _OPENAPI_METADATA_FACTORY() {
        return { tranDate: { required: true, type: () => Date, description: "ID of the transfer transaction." }, tranId: { required: true, type: () => String, description: "date of the transaction." } };
    }
}
exports.ProcessFund = ProcessFund;
//# sourceMappingURL=payment.entity.js.map