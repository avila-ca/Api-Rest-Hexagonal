import { Task } from "../entities/Task";

export interface TodoRepo {
	get(): Promise<Task[]>;
	create(task: Task): Promise<void>;
	update(id: string, task: Task): Promise<void>;
	delete(id: string): Promise<void>;
}
