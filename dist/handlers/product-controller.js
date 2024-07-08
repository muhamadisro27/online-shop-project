"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("../services/product_services");
class ProductController {
}
exports.ProductController = ProductController;
_a = ProductController;
ProductController.getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_services_1.ProductService.getAllProducts();
        return res.json({
            code: 200,
            data: products,
        });
    }
    catch (error) {
        return next(error);
    }
});
