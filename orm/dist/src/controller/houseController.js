"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houseService_1 = __importDefault(require("../service/houseService"));
class HouseController {
    constructor() {
        this.findAll = async (req, res) => {
            let house = '';
            if (req.query.id) {
                house = await this.houseService.findById(req.query.id);
            }
            else {
                house = await this.houseService.findByAll();
            }
            res.json(house);
        };
        this.postHouse = async (req, res) => {
            let house = await this.houseService.postHouse(req.body);
            res.json("dang nha thanh cong");
        };
        this.updateHouse = async (req, res) => {
            let result = await this.houseService.updateHouse(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.deleteHouse = async (req, res) => {
            let result = await houseService_1.default.deleteHouse(req.params.id);
            res.json('xoa thanh cong');
        };
        this.houseService = houseService_1.default;
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map