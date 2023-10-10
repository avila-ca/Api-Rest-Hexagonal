import { Request, Response } from "express";

import { Task } from "../../domain/entities/Task";
import { taskUseCase } from "../dependencies";

export const updateCase = async (
	_req: Request<Record<string, string>, Record<string, unknown>, Task>,
	res: Response
) => {
	const { id } = _req.params;
	const updateTask: Task = _req.body;
	await taskUseCase.update(id, updateTask);
	res.status(200).json({ updateTask });
};
