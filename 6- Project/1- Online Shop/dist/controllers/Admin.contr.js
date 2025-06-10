"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProduct = void 0;
// Get Add Product
let AddProduct = (req, res) => {
    res.render('../views/pages/addProduct', {
        isUser: false,
        isAdmin: req.session.isAdmin
    });
};
exports.AddProduct = AddProduct;
