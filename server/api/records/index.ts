import RecordModel from "~~/server/models/Record.model"

export default defineEventHandler(async event => {
    return await RecordModel.find().populate('id');
})