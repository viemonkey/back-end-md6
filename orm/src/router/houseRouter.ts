import {Router} from "express";
import houseController from "../controller/houserController";
const houseRouter = Router();
houseRouter.get('/', houseController.findAll);
houseRouter.post('/', houseController.add);
houseRouter.delete('/:id', houseController.delete);
houseRouter.put('/:id', houseController.update);
houseRouter.get('/:id', houseController.findById);
export default houseRouter;
