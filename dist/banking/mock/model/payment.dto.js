"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledPaymentDTO = void 0;
const openapi = require("@nestjs/swagger");
class ScheduledPaymentDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { FetchSchedTranRs: { required: true, type: () => FetchSchedTranRs } };
    }
}
exports.ScheduledPaymentDTO = ScheduledPaymentDTO;
class FetchSchedTranRs {
    static _OPENAPI_METADATA_FACTORY() {
        return { SchedTranRec: { required: true, type: () => [SchedTranRecs] } };
    }
}
class SchedTranRecs {
    static _OPENAPI_METADATA_FACTORY() {
        return { SchedTranRec: { required: true, type: () => SchedTranRec } };
    }
}
class SchedTranRec {
    static _OPENAPI_METADATA_FACTORY() {
        return { FrequencyType: { required: true, type: () => String }, FrequencyWeekNum: { required: true, type: () => Number }, FrequencyWeekDay: { required: true, type: () => Number }, FrequencyStartDate: { required: true, type: () => Date }, Amount: { required: true, type: () => Number }, Currency: { required: true, type: () => String }, SerialNum: { required: true, type: () => Number }, TransferType: { required: true, type: () => String }, ScheduledDt: { required: true, type: () => Date }, Method: { required: true, type: () => String }, Reason: { required: true, type: () => String }, EndDt: { required: true, type: () => Date } };
    }
}
//# sourceMappingURL=payment.dto.js.map