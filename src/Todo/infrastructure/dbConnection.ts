import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const nameDB = process.env.DATABASE ?? "error";
const urlDB = process.env.MONGO_URI ?? "error";
export const dbConnection = mongoose
	.connect(urlDB)
	.then(() => console.log(`${nameDB} database connected!`));
