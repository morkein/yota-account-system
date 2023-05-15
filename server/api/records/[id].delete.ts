import RecordModel from "~~/server/models/Record.model";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);
	// get id from params
	const id = event.context.params?.id;

    try {
        await RecordModel.findByIdAndDelete(id);
        return {message : "Record Deleted"};
    } catch (e) {
        throw createError({
            message: (e as Error).message,
        })
    }

});