import RecordModel from "~~/server/models/Record.model";
import { RecordSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);
	// get id from params
	const id = event.context.params?.id;

	// validate
	let { error } = RecordSchema.validate(body, { abortEarly: true, allowUnknown: true });
	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}

	// Update book
	try {
		await RecordModel.findByIdAndUpdate(id, body);
		return { message: "Record updated" };
	} catch (e) {
		throw createError({
			message: (e as Error).message,
		});
	}
});
