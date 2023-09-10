"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const house_1 = require("../entity/house");
class HouseService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find({
                relations: {
                    user: true,
                }
            });
        };
        this.add = async (blog) => {
            return await this.Repository.save(blog);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.update = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.findById = async (id) => {
            return await this.Repository.find({ where: { id: id } });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(house_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map