import { ILike } from "typeorm";
import { AppDataSource } from "../data-source";
import { House } from "../entities/house";

class HouseService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(House);
    }

    postHouse = async (data) => {
        return await this.Repository.save(data)
    }

    updateHouse =async (id, data) => {
        return await this.Repository.update(id,data)
    }
    deleteHouse =async (id) => {
        return await this.Repository.delete(id)
    }
    findByAll = async ()=>{
        return await this.Repository.find({
            relations : {
                user : true
            },
            
        })
    }
    findById = async (id)=>{
        return await this.Repository.findOne({
            where: { id },
            relations : {
                user : true
            },
        })
    }
    findByName = async (name)=>{
        return await this.Repository.find({
            where: { 
                name: ILike(`%${name}%`)
            },
            relations : {
                user : true
            },
        })
    }
    findByStatus = async (status)=>{
        return await this.Repository.find({
            where: { status },
            relations : {
                user : true
            },
        })
    }

}

export default new HouseService()