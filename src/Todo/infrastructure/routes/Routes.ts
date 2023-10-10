import { Router } from "express";

import { createCase } from "./createCase";
import { deleteCase } from "./deleteCase";
import { getCase } from "./getCase";
import { updateCase } from "./updateCase";

export const appRouter = Router();

appRouter.get("/", getCase);
appRouter.post("/", createCase);
appRouter.put("/:id", updateCase);
appRouter.delete("/:id", deleteCase);
