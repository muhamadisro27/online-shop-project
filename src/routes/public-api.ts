import express from "express"
import { ProductController } from "../handlers/product-controller"

export const publicRouter = express.Router()

publicRouter.get("/api/products", ProductController.getAllProducts)
