"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const picture_1 = require("../entity/picture");
class PictureService {
    constructor() {
        this.postPicture = async (data) => {
            return await this.Repository.save(data);
        };
        this.updatePicture = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.deletePicture = async (id) => {
            return await this.Repository.delete(id);
        };
        this.findByAll = async () => {
            return await this.Repository.find({
                relations: {
                    house: true
                },
            });
        };
        this.findById = async (id) => {
            return await this.Repository.findOne({
                where: { id },
                relations: {
                    house: true
                },
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(picture_1.Picture);
    }
}
exports.default = new PictureService();
//# sourceMappingURL=pictureService.js.map