import { AnyRecord } from "dns";
import { NextFunction, Request, Response } from "express";
import { JSONResponse } from "../interfaces/json-response";
import { ProductInterface } from "../interfaces/product-interface";
import { ProductService } from "../services/product_services";

export class ProductController {
  static getAllProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
