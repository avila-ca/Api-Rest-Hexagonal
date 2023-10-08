import { Task } from "../../Todo/domain/entities/Task";
import { TodoRepo } from "../domain/repositories/TodoRepo";

export class CreateTodoUseCase {
	constructor(private readonly todoRepo: TodoRepo) {}

	async execute(): Promise<void> {
		try {
			await this.todoRepo.create();
		} catch (error) {
			throw new Error("Creating task error");
		}
	}
}
