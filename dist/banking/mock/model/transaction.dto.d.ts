export declare class TransactionDTO {
    readonly acctTrnInqRs: AcctTrnInqRes;
}
declare class AcctTrnInqRes {
    readonly AcctTrnRec: AcctTrnRec[];
}
declare class AcctTrnRec {
    readonly tranId: string;
    readonly tranType: string;
    readonly tranCcy: string;
    readonly tranParticulars: string;
    readonly tranAmount: number;
    readonly creditDebitFlg: string;
    readonly tranStatus: string;
    readonly tranCodeDesc: string;
    readonly partTranDesc: string;
    readonly tranDate: string;
    readonly valueDate: string;
}
export {};
