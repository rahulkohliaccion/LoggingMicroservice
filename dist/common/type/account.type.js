"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomerAccountTO = exports.PrimaryAccountTO = exports.AccountBalanceTO = exports.ListAccountTO = void 0;
const account_enum_1 = require("../enum/account.enum");
class ListAccountTO {
    constructor() {
        this.status = account_enum_1.AccountStatusEnum.Open;
    }
}
exports.ListAccountTO = ListAccountTO;
class AccountBalanceTO {
}
exports.AccountBalanceTO = AccountBalanceTO;
class PrimaryAccountTO {
}
exports.PrimaryAccountTO = PrimaryAccountTO;
class ListCustomerAccountTO {
    constructor() {
        this.type = account_enum_1.AccountTypeEnum.ALL;
    }
}
exports.ListCustomerAccountTO = ListCustomerAccountTO;
//# sourceMappingURL=account.type.js.map