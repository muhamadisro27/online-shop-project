import { prismaClient } from "../app/database";
import { ProductResponse, toProductResponse } from "../models/product-model";

export class ProductRepository {
  static getAllProducts = async (): Promise<ProductResponse[]> => {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
      },
    });

    return products;
  };
}
