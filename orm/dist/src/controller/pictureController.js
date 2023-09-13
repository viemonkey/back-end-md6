"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pictureService_1 = __importDefault(require("../service/pictureService"));
class PictureController {
    constructor() {
        this.postPicture = async (req, res) => {
            let picture = await pictureService_1.default.postPicture(req.body);
            return (picture);
        };
        this.findAll = async (req, res) => {
            let picture = '';
            if (req.query.id) {
                picture = await this.pictureService.findById(req.query.id);
            }
            else {
                picture = await this.pictureService.findByAll();
            }
            res.json(picture);
        };
        this.updatepicture = async (req, res) => {
            let result = await this.pictureService.updatePicture(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.deletepicture = async (req, res) => {
            let result = await pictureService_1.default.deletePicture(req.params.id);
            res.json('xoa thanh cong');
        };
        this.pictureService = pictureService_1.default;
    }
}
exports.default = new PictureController();
//# sourceMappingURL=pictureController.js.map