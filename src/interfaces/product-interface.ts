import { AnyRecord } from "dns";
import { NextFunction, Request, Response } from "express";
import { JSONResponse } from "./json-response";

export interface ProductInterface {
    listProducts: (req: Request, res: Response, next: NextFunction) => JSONResponse<any>;
}