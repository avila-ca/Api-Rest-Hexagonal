import dotenv from "dotenv";

import { Server } from "./Server";

dotenv.config();
export class App {
	server?: Server;

	async start(): Promise<void> {
		const port = process.env.PORT ?? "3000";
		this.server = new Server(port);

		await this.server.listen();
	}
}
