import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	content: String,
	important: Boolean,
});

export const taskMongo = mongoose.model("Task", TaskSchema);
