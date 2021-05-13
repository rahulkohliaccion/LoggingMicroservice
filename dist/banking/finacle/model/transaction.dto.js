"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDTO = void 0;
const openapi = require("@nestjs/swagger");
class TransactionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { acctTrnInqRs: { required: true, type: () => AcctTrnInqRes } };
    }
}
exports.TransactionDTO = TransactionDTO;
class AcctTrnInqRes {
    static _OPENAPI_METADATA_FACTORY() {
        return { AcctTrnRec: { required: true, type: () => [AcctTrnRec] } };
    }
}
class AcctTrnRec {
    static _OPENAPI_METADATA_FACTORY() {
        return { tranId: { required: true, type: () => String }, tranType: { required: true, type: () => String }, tranCcy: { required: true, type: () => String }, tranParticulars: { required: true, type: () => String }, tranAmount: { required: true, type: () => Number }, creditDebitFlg: { required: true, type: () => String }, tranStatus: { required: true, type: () => String }, tranCodeDesc: { required: true, type: () => String }, partTranDesc: { required: true, type: () => String }, tranDate: { required: true, type: () => String }, valueDate: { required: true, type: () => String } };
    }
}
//# sourceMappingURL=transaction.dto.js.map