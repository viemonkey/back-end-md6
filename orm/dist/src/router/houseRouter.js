"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const houserController_1 = __importDefault(require("../controller/houserController"));
const houseRouter = (0, express_1.Router)();
houseRouter.get('/', houserController_1.default.findAll);
houseRouter.post('/', houserController_1.default.add);
houseRouter.delete('/:id', houserController_1.default.delete);
houseRouter.put('/:id', houserController_1.default.update);
houseRouter.get('/:id', houserController_1.default.findById);
exports.default = houseRouter;
//# sourceMappingURL=houseRouter.js.map