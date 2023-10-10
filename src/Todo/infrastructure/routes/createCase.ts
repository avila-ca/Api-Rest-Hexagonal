import { Request, Response } from "express";

import { Task } from "../../domain/entities/Task";
import { taskUseCase } from "../dependencies";

export const createCase = async (
	_req: Request<Record<string, unknown>, Record<string, unknown>, Task>,
	res: Response
) => {
	await taskUseCase.create(_req.body);
	res.status(201).json(_req.body);
};
