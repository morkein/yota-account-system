import RecordModel from "~~/server/models/Record.model"
import { DateTime } from "luxon";

export default defineEventHandler(async event => {
    const { date } = getQuery(event);
    if (date) {
        const start = DateTime.fromISO(date as string).startOf('day').toISO();
        const end = DateTime.fromISO(date as string).endOf('day').toISO();

        return await RecordModel.find({date: {$gte: start, $lte: end}});
    }

    return await RecordModel.find().populate('id');
})
