import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/product_services";

export class ProductController {
  static getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<any, Record<string, any>>> => {
    try {
      const products = await ProductService.getAllProducts();

      return res.json({
        code: 200,
        data: products,
      });
    } catch (error) {
      return next(error);
    }
  };
}
