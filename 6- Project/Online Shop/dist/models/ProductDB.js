"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Mongosse
const mongoose_1 = __importDefault(require("mongoose"));
// Create Schema
const productSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    image: String
});
// Create Model
const Product = mongoose_1.default.model('product', productSchema);
// Export Product
exports.default = Product;
