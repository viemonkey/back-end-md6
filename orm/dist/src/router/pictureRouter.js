"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pictureController_1 = __importDefault(require("../controller/pictureController"));
const pictureRouter = (0, express_1.Router)();
pictureRouter.post('/', pictureController_1.default.postPicture);
pictureRouter.get('/', pictureController_1.default.findAll);
exports.default = pictureRouter;
//# sourceMappingURL=pictureRouter.js.map