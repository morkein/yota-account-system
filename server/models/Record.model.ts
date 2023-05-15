import mongoose from "mongoose";

//Record schema
const schema: mongoose.Schema = new mongoose.Schema(
    {
        id: {
            type: Number,
            requied: true,
        },
        time: {
            type: String,
            requied: true,
        },
        operationType: {
            type: String,
            requied: true,
        },
        summ: {
            type: Number,
            requied: true,
        },
        paymentType: {
            type: String,
            requied: true,
        }    

    },
    { timestamps: true}
);

//Record model
export default mongoose.model("Record", schema);
