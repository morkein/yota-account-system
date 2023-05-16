import mongoose from "mongoose";

//Record schema
const schema: mongoose.Schema = new mongoose.Schema(
    {
        id: {
            type: Number,
            requied: true,
        },
        date: {
            type: String,
            requied: true,
        },
        operationType: {
            type: Object,
            requied: true,
        },
        summ: {
            type: Number,
            requied: true,
        },
        paymentType: {
            type: Object,
            requied: true,
        }

    },
    { timestamps: true}
);

//Record model
export default mongoose.model("Record", schema);
