export declare class ScheduledPaymentDTO {
    readonly FetchSchedTranRs: FetchSchedTranRs;
}
declare class FetchSchedTranRs {
    readonly SchedTranRec: SchedTranRecs[];
}
declare class SchedTranRecs {
    readonly SchedTranRec: SchedTranRec;
}
declare class SchedTranRec {
    readonly FrequencyType: string;
    readonly FrequencyWeekNum: number;
    readonly FrequencyWeekDay: number;
    readonly FrequencyStartDate: Date;
    readonly Amount: number;
    readonly Currency: string;
    readonly SerialNum: number;
    readonly TransferType: string;
    readonly ScheduledDt: Date;
    readonly Method: string;
    readonly Reason: string;
    readonly EndDt: Date;
}
export {};
