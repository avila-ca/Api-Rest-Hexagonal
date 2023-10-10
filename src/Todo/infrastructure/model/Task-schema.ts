import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
	content: { type: String, required: true },
	important: { type: Boolean, default: false},
});

export const taskMongo = mongoose.model("Task", TaskSchema);
