"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const nameDB = (_a = process.env.DATABASE) !== null && _a !== void 0 ? _a : "error";
const urlDB = (_b = process.env.MONGO_URI) !== null && _b !== void 0 ? _b : "error";
exports.dbConnection = mongoose_1.default
    .connect(urlDB)
    .then(() => console.log(`${nameDB} database connected!`));
//# sourceMappingURL=dbConnection.js.map