import { TodoUseCase } from "../application/TodoUseCases";
import { MongoTodoRepository } from "./MongoRepositories/MongoTodoRepo";

const taskMongoRepo = new MongoTodoRepository();
export const taskUseCase = new TodoUseCase(taskMongoRepo);