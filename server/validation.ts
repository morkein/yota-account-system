import Joi from "joi";

export const RecordSchema = Joi.object({
    id: Joi.number().integer().positive(),
    time: Joi.string().required(),
    operationType: Joi.string().required(),
    summ: Joi.number().positive(),
    paymentType: Joi.string().required(),
});