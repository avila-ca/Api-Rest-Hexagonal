import { Task } from "../domain/entities/Task";
import { TodoRepo } from "../domain/repositories/TodoRepo";

export class TodoUseCase {
	constructor(private readonly todoRepo: TodoRepo) {}

	async get(): Promise<Task[]> {
		try {
			const tasks = await this.todoRepo.get();

			return tasks;
		} catch (error) {
			throw new Error("get method error");
		}
	}

	async create(newtask: Task): Promise<void> {
		try {
			await this.todoRepo.create(newtask);
		} catch (error) {
			throw new Error("create method error");
		}
	}

	async update(id: string, newtask: Task): Promise<void> {
		try {
			await this.todoRepo.update(id, newtask);
		} catch (error) {
			throw new Error("update method error");
		}
	}

	async del(id: string): Promise<void> {
		try {
			await this.todoRepo.delete(id);
		} catch (error) {
			throw new Error("delete method error");
		}
	}
}
