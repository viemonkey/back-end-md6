import { Request, Response } from "express";
declare class HouseController {
    private houseService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    postHouse: (req: Request, res: Response) => Promise<void>;
    updateHouse: (req: Request, res: Response) => Promise<void>;
    deleteHouse: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HouseController;
export default _default;
