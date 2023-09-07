import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro);
    }

    getAll = async () => {
        let products = await this.productRepository.find();
        return products;
    }

    add = async (product) => {
        await this.productRepository.save(product)
    }
}

export default new ProductService();
