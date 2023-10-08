"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.get("/", (req, res) => {
    res.send("hola");
    console.log("sssssss");
});
//# sourceMappingURL=Routes.js.map