"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const urlDB = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "error";
exports.dbConnection = mongoose_1.default.connect(urlDB);
//# sourceMappingURL=dbConnection.js.map