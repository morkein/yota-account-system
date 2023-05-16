export interface IRecord{
    _id?: string;
    id: number;
    date: string;
    operationType: string;
    summ: number;
    paymentType: string;
}

interface SelectType<V, T> {
    value: V;
    title: T;
}
enum OperationValue {
    SmartSim,
    ModemSim,
    PdChange,
    SimReplacement,
    Termination,
    Pretension,
    DSReturn
}

enum PaymentValue {
    Cash,
    NonCash
}

export interface OperationType extends SelectType<OperationValue, string> {}
export interface PaymentType extends SelectType<PaymentValue, string> {}
