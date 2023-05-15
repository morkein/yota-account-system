import RecordModel from "~~/server/models/Record.model";
import { RecordSchema } from "~~/server/validation";

export default defineEventHandler(async (event) =>{
    //Get data
    const body = await readBody(event);

    // validate
	let { error } = RecordSchema.validate(body);
	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}

    // create record
	try {
		await RecordModel.create(body);
		return { message: "Record created" };
	} catch (e) {
		throw createError({
			message: (e as Error).message,
		});
	}

})