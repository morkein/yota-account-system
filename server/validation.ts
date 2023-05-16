import Joi from "joi";
import { OperationType, PaymentType } from '~/types'

export const RecordSchema = Joi.object({
    id: Joi.number().integer().positive(),
    date: Joi.string().required(),
    operationType: Joi.object<OperationType>().required(),
    summ: Joi.number().positive(),
    paymentType: Joi.object<PaymentType>().required(),
});
