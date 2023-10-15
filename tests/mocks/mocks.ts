import { Types } from "mongoose";

import type { Task } from "../../src/Todo/domain/entities/Task";

export const mockedTask: Task = {
	content: "Hello World",
	important: false,
};

export const updatedMockedTask: Task = {
	content: "Hello World",
	important: true,
};

export const mockedTaskWithId = {
	_id: new Types.ObjectId("6478dd2fe3e61710d8baa049"),
	content: "Hello World",
	important: false,
};
