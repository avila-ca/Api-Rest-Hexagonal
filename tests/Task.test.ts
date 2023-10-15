import * as dotenv from "dotenv";
import mongoose from "mongoose";
import request from "supertest";

import { App } from "../src/backend/App";

dotenv.config();

describe("GET", () => {
	test("GET request", async () => {
		request(App).get("/api");
		await mongoose.connection.close();
	}, 100000);
});

describe("POST", () => {
	test("POST request", async () => {
		request(App).post("/api");
		await mongoose.connection.close();
	}, 100000);
});
describe("PUT", () => {
	test("PUT request", async () => {
		request(App).put("/api");
		await mongoose.connection.close();
	}, 100000);
});
describe("DELETE", () => {
	test("DELETE request", async () => {
		request(App).delete("/api");
		await mongoose.connection.close();
	}, 100000);
});
