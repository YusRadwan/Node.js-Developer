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
exports.getProductById = exports.getProducts = void 0;
const ProductDB_1 = __importDefault(require("../models/ProductDB"));
const async_1 = __importDefault(require("../middleware/async"));
// Get All Products
exports.getProducts = (0, async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cate = req.query.category; // Query String Parameters
        if (cate && cate !== "all") {
            let Prod = yield ProductDB_1.default.find({ category: cate });
            res.status(200).render('index', {
                products: Prod
            });
        }
        else {
            let Prod = yield ProductDB_1.default.find({});
            res.status(200).render('index', {
                products: Prod
            });
        }
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Product Controller`);
    }
}));
// Get Product By ID
exports.getProductById = (0, async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let ProdID = yield ProductDB_1.default.findById(req.params.id); // Routing Parameters
        res.render('pages/product', { ProdID });
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Product ID Controller`);
    }
}));
