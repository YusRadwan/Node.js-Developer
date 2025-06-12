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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getAddProduct = void 0;
const express_validator_1 = require("express-validator");
const ProductDB_1 = __importDefault(require("../models/ProductDB"));
// Get Add Product
let getAddProduct = (req, res) => {
    res.render('../views/pages/addProduct', {
        errors: false,
        isUser: false,
        isAdmin: req.session.isAdmin,
        titlePage: 'Add Product'
    });
};
exports.getAddProduct = getAddProduct;
let addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let result = (0, express_validator_1.validationResult)(req);
        const { name, price, category, description } = req.body;
        if (result.isEmpty()) {
            let product = yield ProductDB_1.default.findOne({ name: name });
            if (product) {
                console.log(`${product.name} Product Is exists`);
                res.redirect('/addProduct');
            }
            else {
                let prod = new ProductDB_1.default({
                    name: name,
                    price: price,
                    category: category,
                    description: description,
                    image: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename
                });
                prod.save();
                res.redirect('/');
            }
        }
        else {
            console.log(`Errors in fields when try Add Product`);
            res.render('../views/pages/addProduct.ejs', {
                errors: result.array(),
                isUser: false,
                isAdmin: req.session.isAdmin
            });
        }
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Signup User Controller`);
    }
});
exports.addProduct = addProduct;
