"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Mongosse
const mongoose_1 = require("mongoose");
// Create Schema
const cartSchema = new mongoose_1.Schema({
    name: { type: String },
    price: { type: Number },
    amount: { type: Number },
    userId: { type: String },
    productId: { type: String },
    timestamp: { type: Date }
});
// Create Model
const Cart = (0, mongoose_1.model)('cart', cartSchema);
// Export Product
exports.default = Cart;
