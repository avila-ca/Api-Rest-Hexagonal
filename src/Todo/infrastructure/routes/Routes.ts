import { Router } from "express";

export const appRouter = Router();

appRouter.get("/", getAll);
appRouter.post("/", create);
appRouter.put("/:id", update);
appRouter.delete("/:id", delete);