"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const house_1 = require("../entity/house");
class HouseService {
    constructor() {
        this.postHouse = async (data) => {
            return await this.Repository.save(data);
        };
        this.updateHouse = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.deleteHouse = async (id) => {
            return await this.Repository.delete(id);
        };
        this.findByAll = async () => {
            return await this.Repository.find({
                relations: {
                    user: true
                },
            });
        };
        this.findById = async (id) => {
            return await this.Repository.findOne({
                where: { id },
                relations: {
                    user: true
                },
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(house_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map