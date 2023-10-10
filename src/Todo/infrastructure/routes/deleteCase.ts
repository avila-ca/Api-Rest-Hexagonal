import { Request, Response } from "express";

import { taskUseCase } from "../dependencies";

export const deleteCase = async (req: Request, res: Response) => {
	const { id } = req.params;
	await taskUseCase.del(id);
	res.status(201);
};
