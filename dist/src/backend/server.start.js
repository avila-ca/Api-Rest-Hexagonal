"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Todo/infrastructure/dbConnection");
const App_1 = require("./App");
try {
    void new App_1.App().start();
}
catch (e) {
    process.exit(1);
}
process.on("uncaughtException", () => {
    process.exit(1);
});
//# sourceMappingURL=server.start.js.map