"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProductResponse = toProductResponse;
function toProductResponse(product) {
    return [{ id: product.id, name: product.name, price: product.price }];
}
