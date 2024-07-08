import { JSONResponse } from "../interfaces/json-response";
import { ProductResponse, toProductResponse } from "../models/product-model";
import { ProductRepository } from "../repository/product-repository";

export class ProductService {
  static getAllProducts = async (): Promise<ProductResponse[]> => {
    const products = await ProductRepository.getAllProducts();

    return products;
  };
}
