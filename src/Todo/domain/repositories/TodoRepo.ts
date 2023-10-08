export interface TodoRepo {
	get(): Promise<void>;
	create(): Promise<void>;
}
