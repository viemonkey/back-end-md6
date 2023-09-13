"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const userController_1 = __importDefault(require("../controller/userController"));
const houseRouter_1 = __importDefault(require("./houseRouter"));
const pictureRouter_1 = __importDefault(require("./pictureRouter"));
const router = (0, express_1.Router)();
router.use('/users', userRouter_1.default);
router.use('/houses', houseRouter_1.default);
router.use('/pictures', pictureRouter_1.default);
router.post('/login', userController_1.default.login);
router.post('/register', userController_1.default.register);
exports.default = router;
//# sourceMappingURL=router.js.map