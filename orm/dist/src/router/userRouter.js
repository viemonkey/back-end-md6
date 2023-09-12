"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const userRouter = (0, express_1.Router)();
userRouter.delete('/:id', userController_1.default.delete);
userRouter.get('/', userController_1.default.getAllUser);
userRouter.put('/:id', userController_1.default.update);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map