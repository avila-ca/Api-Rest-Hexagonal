import * as dotenv from "dotenv";
import type express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";

import { Server } from "../src/backend/Server";
import { taskMongo } from "../src/Todo/infrastructure/model/Task-schema";
import { appRouter } from "../src/Todo/infrastructure/routes/Routes";
import { dbConnection } from "../src/Todo/infrastructure/dbConnection";

beforeAll(() => {

    dotenv.config();

    let app: express.Express;
    const serverObj = new Server("7000");
    app = serverObj.app;
});

afterAll(async () => {
    await mongoose.connection.close();
    await app.close();
  });


describe("When it receives a request with an authorization header containing a valid user and password, and a task as a body", () => {
    test("Then it should return a 201 status and the new task", async () => {
        const expectedStatus = 201;

        const response = await request(app)
            .post("/tasks")
            .set("Authorization", `Basic ${authString}`)
            .send(mockedTask)
            .expect(expectedStatus);

        expect(response.body).toHaveProperty("task");
    });
});
});