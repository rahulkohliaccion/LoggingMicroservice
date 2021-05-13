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
exports.AccountBalanceDetail = exports.Account = void 0;
const openapi = require("@nestjs/swagger");
const loan_entity_1 = require("./loan.entity");
const class_validator_1 = require("class-validator");
class Account {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "Unique identification key for an account of the customer." }, balance: { required: false, type: () => Balance, description: "The value of Account balance of the customer." }, shortName: { required: true, type: () => String, description: "Short name of the customer account" }, currencyCode: { required: true, type: () => String, description: "The currency code of the account. For example, USD, INR, GBP" }, multiCurrInd: { required: true, type: () => String, description: "A flag which indicates whether the account is a Multi Currency Account." }, branchId: { required: true, type: () => String, description: "The code of the branch in which account is operated." }, masterAcctId: { required: true, type: () => String, description: "A flag which indicates whether the account is Normal, Master or Child Account." }, role: { required: true, type: () => String, description: "The role played by the customer for the application form. Valid values are Main account holder, Guarantee, Joint and so on." }, status: { required: true, description: "The current status of the account. Valid Values are Open, Closed.", enum: require("../enum/account.enum").AccountStatusEnum }, prodCategoryId: { required: true, type: () => String, description: "Identifies the category of the product." }, productCode: { required: true, type: () => String, description: "Specifies the Finacle/Non Finacle product code for the customer's account." }, productCategory: { required: true, description: "Product category for all the Finacle and non Finacle products.", enum: require("../enum/account.enum").AccountTypeEnum }, topUpInd: { required: true, description: "A flag indicating that the account is a top up or TUA type account or not. Valid Values are Y-Yes and N-No.", enum: require("../enum/account.enum").AccountTopUpIndicatorEnum }, openingDate: { required: true, type: () => Date, description: "The date of opening the account.Date field should be in the format \"2015-10-28T14:12:42.476\"." }, closedDate: { required: true, type: () => Date, description: "The date on which the status of the account is marked as closed.Date field should be in the format \"2015-10-28T14:12:42.476\"." }, depositInterest: { required: false, type: () => require("./deposit.entity").DepositInterest, description: "Interest Details for Deposits" }, loanOverdue: { required: false, type: () => [require("./loan.entity").LoanOverdue], description: "Overdue Details for Loans" } };
    }
}
exports.Account = Account;
class AccountBalanceDetail {
    static _OPENAPI_METADATA_FACTORY() {
        return { futureBalance: { required: true, type: () => Balance }, clearBalance: { required: true, type: () => Balance }, availableBalance: { required: true, type: () => Balance }, accountId: { required: true, type: () => String } };
    }
}
exports.AccountBalanceDetail = AccountBalanceDetail;
class Balance {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number, description: "Amount value." }, currency: { required: true, type: () => String, description: "Currency Code", maxLength: 10 }, crDrInd: { required: true, type: () => String, description: "Credit Debit Indicator" } };
    }
}
__decorate([
    class_validator_1.MaxLength(10),
    __metadata("design:type", String)
], Balance.prototype, "currency", void 0);
//# sourceMappingURL=account.entity.js.map