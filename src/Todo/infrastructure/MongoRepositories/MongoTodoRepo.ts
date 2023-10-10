// infrastructure/database/repositories/MongoTodoRepository.ts
import { Task } from "../../domain/entities/Task";
import { TodoRepo } from "../../domain/repositories/TodoRepo";
import { taskMongo } from "../model/Task-schema";

export class MongoTodoRepository implements TodoRepo {

	async get(): Promise<Task[]> {
		try {
			const tasks = await taskMongo.find();

			return tasks;
		} catch (error) {
			throw new Error("Error al obtener todas las tareas desde MongoDB.");
		}
	}

	async create(task: Task): Promise<void> {
		try {
			await taskMongo.create(task);

		} catch (error) {
			throw new Error("Error al crear una nueva tarea en MongoDB.");
		}
	}

	async delete(id: string): Promise<void> {
		try {
			await taskMongo.findByIdAndDelete(id);
		} catch (error) {
			throw new Error(`Error al eliminar la tarea con ID ${id} en MongoDB.`);
		}
	}

	async update(id: string, task: Task): Promise<void> {
		try {
			await taskMongo.findByIdAndUpdate(id, task, { new: true });
		} catch (error) {
			throw new Error("Error al obtener todas las tareas desde MongoDB.");
		}
	}
}
