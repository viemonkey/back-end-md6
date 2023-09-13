import { Request, Response } from "express";
declare class PictureController {
    private pictureService;
    constructor();
    postPicture: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<void>;
    updatepicture: (req: Request, res: Response) => Promise<void>;
    deletepicture: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PictureController;
export default _default;
