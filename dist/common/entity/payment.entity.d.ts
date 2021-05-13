export declare class ScheduledPayment {
    readonly amount: number;
    readonly currency: string;
    readonly transferMethod: string;
    readonly transferType: string;
    readonly scheduledDt: Date;
    readonly serialNumber: number;
    readonly reason: string;
    readonly endDt: Date;
    readonly frequencyType: string;
    readonly frequencyWeekNumber: number;
    readonly FrequencyWeekDay: number;
    readonly FrequencyStartDate: Date;
}
export declare class ProcessFund {
    readonly tranDate: Date;
    readonly tranId: string;
}
