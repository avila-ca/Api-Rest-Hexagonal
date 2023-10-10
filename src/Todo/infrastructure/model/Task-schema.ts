import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
	content: { type: String, required: true },
	important: { type: Boolean, default: false },
});
export const taskMongo =
	process.env.NODE_ENV === "test"
		? mongoose.model("Task", TaskSchema)
		: mongoose.model("Note", TaskSchema);
