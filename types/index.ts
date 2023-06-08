interface SelectType<V, T> {
    value: V;
    title: T;
}
export enum OperationValue {
    SmartSim,
    ModemSim,
    PdChange,
    SimReplacement,
    Termination,
    Pretension,
    DSReturn
}

export enum PaymentValue {
    Cash,
    NonCash
}

export interface OperationType extends SelectType<OperationValue, string> {}
export interface PaymentType extends SelectType<PaymentValue, string> {}

export interface IRecord{
    _id?: string;
    id: number;
    date: string;
    operationType: OperationType;
    summ: number;
    paymentType: PaymentType;
}
