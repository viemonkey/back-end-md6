import blogService from "../service/houseService";
import {Request, Response} from "express";
import {House} from "../entity/house";
import houseService from "../service/houseService";

class HouseController{
    private houseService

    constructor() {
        this.houseService = houseService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.houseService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Tháng được đánh số từ 0 đến 11, nên cần cộng thêm 1
        const day = currentDate.getDate();
        const hours = currentDate.getHours()
        const minutes = currentDate.getUTCMinutes()
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        console.log(hours)

        const house = new House();
        house.name= req.body.name;
        house.address =req.body.address
        house.numberOfBedroom = req.body.numberOfBedroom
        house.numberOfBathroom = req.body.numberOfBathroom
        house.money = req.body.money
        house.date = formattedDate; // Cập nhật trường date thành thời gian hiện tại
        house.detail = req.body.content;
        house.image = req.body.image;
        house.user = req.body.user;

        let addedBlog = await this.houseService.add(house);
        res.json(addedBlog);
    }
    delete =async (req: Request, res: Response) => {
        await this.houseService.delete(req.params.id);

        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.houseService.update(req.params.id, req.body);
        res.json("sửa thành công")
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await blogService.findById(req.params.id)
        res.json(listClassRoom);
    }
}
export default new HouseController()