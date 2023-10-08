"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    content: String,
    date: Date,
    important: Boolean,
});
exports.taskMongo = mongoose_1.default.model("Task", TaskSchema);
//# sourceMappingURL=Task-schema.js.map