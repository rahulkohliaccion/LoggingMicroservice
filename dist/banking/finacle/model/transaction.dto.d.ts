export declare class TransactionDTO {
    acctTrnInqRs: AcctTrnInqRes;
}
declare class AcctTrnInqRes {
    AcctTrnRec: AcctTrnRec[];
}
declare class AcctTrnRec {
    tranId: string;
    tranType: string;
    tranCcy: string;
    tranParticulars: string;
    tranAmount: number;
    creditDebitFlg: string;
    tranStatus: string;
    tranCodeDesc: string;
    partTranDesc: string;
    tranDate: string;
    valueDate: string;
}
export {};
