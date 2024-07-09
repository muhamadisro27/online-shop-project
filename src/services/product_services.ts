import { JSONResponse } from "../interfaces/json-response";
import { ProductResponse } from "../models/product-model";
import { ProductRepository } from "../repository/product-repository";

export class ProductService {
  static getAllProducts = async (): Promise<ProductResponse[]> => {
    return await ProductRepository.getAllProducts();
  };
}
