"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../handlers/product-controller");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.get("/api/products", product_controller_1.ProductController.getAllProduct);
