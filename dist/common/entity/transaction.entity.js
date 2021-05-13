"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const openapi = require("@nestjs/swagger");
class Transaction {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "Transaction Identifier" }, type: { required: true, description: "Transaction Type. Valid values are C-Cash, T-Transfer and L-Clearing.})", enum: require("../enum/transaction.enum").TransactionType }, currency: { required: true, type: () => String, description: "Transaction Currency" }, particulars: { required: true, type: () => String, description: "Transaction Remarks" }, amount: { required: true, type: () => Number, description: "Transaction Amount" }, creditDebitFlg: { required: true, description: "type of part transaction. Valid values are C-Credit Transaction and D-Debit Transaction", enum: require("../enum/transaction.enum").CreditDebitFlag }, status: { required: true, description: "status of the transaction. Valid values are E-Entered, D-Deleted, P-Posted and V-Verified.", enum: require("../enum/transaction.enum").TransactionStatus }, codeDescription: { required: true, type: () => String, description: "Description of the user transaction code" }, partDescription: { required: true, type: () => String, description: "Description of the user part transaction code" }, createdOn: { required: false, type: () => Date, description: "Transaction Date" }, updatedOn: { required: false, type: () => Date, description: "Value Date" } };
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map