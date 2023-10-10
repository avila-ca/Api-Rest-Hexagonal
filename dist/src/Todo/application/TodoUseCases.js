"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUseCase = void 0;
class TodoUseCase {
    constructor(todoRepo) {
        this.todoRepo = todoRepo;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.todoRepo.get();
                return tasks;
            }
            catch (error) {
                throw new Error("Creating task error");
            }
        });
    }
    create(newtask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoRepo.create(newtask);
            }
            catch (error) {
                throw new Error("Creating task error");
            }
        });
    }
    update(id, newtask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoRepo.update(id, newtask);
            }
            catch (error) {
                throw new Error("Creating task error");
            }
        });
    }
    del(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoRepo.delete(id);
            }
            catch (error) {
                throw new Error("Creating task error");
            }
        });
    }
}
exports.TodoUseCase = TodoUseCase;
//# sourceMappingURL=TodoUseCases.js.map