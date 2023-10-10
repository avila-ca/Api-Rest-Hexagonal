import { Request, Response } from "express";

import { Task } from "../../domain/entities/Task";
import { taskUseCase } from "../dependencies";

export const getCase = async (
	_req: Request<Record<string, unknown>, Record<string, unknown>, Task>,
	res: Response
) => {
	const taskList = await taskUseCase.get();
	res.status(201).json(taskList);
};
