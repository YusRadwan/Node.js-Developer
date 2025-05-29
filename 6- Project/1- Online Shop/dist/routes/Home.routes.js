"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const Product_contr_1 = require("../controllers/Product.contr");
// Use Function Router
const router = express_1.default.Router();
// Get All Products
router.get('/', Product_contr_1.getProducts);
// Export
exports.default = router;
