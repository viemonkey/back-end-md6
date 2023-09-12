import {Router} from "express";
import userRouter from "./userRouter";
import userController from "../controller/userController";

const router = Router();
router.use('/users', userRouter);
router.post('/login', userController.login);
router.post('/register', userController.register);
export default router;
