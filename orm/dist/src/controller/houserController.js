"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houseService_1 = __importDefault(require("../service/houseService"));
const house_1 = require("../entity/house");
const houseService_2 = __importDefault(require("../service/houseService"));
class HouseController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.houseService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getUTCMinutes();
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            console.log(hours);
            const house = new house_1.House();
            house.name = req.body.name;
            house.address = req.body.address;
            house.numberOfBedroom = req.body.numberOfBedroom;
            house.numberOfBathroom = req.body.numberOfBathroom;
            house.money = req.body.money;
            house.date = formattedDate;
            house.detail = req.body.content;
            house.image = req.body.image;
            house.user = req.body.user;
            let addedBlog = await this.houseService.add(house);
            res.json(addedBlog);
        };
        this.delete = async (req, res) => {
            await this.houseService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.update = async (req, res) => {
            let result = await this.houseService.update(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.findById = async (req, res) => {
            let listClassRoom = await houseService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.houseService = houseService_2.default;
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houserController.js.map