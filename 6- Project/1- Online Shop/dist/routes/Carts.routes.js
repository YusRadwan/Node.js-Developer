"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const Cart_contr_1 = require("../controllers/Cart.contr");
const IsUser_midd_1 = require("../middleware/IsUser.midd");
// Use Function Router
const router = express_1.default.Router();
// Get Cart
router.get('/cart', IsUser_midd_1.isUser, Cart_contr_1.getCart);
// post Cart
router.post('/cart', IsUser_midd_1.isUser, Cart_contr_1.postCart);
// Edit On item
router.post('/cart/save', Cart_contr_1.EditCart);
// Delete Item
router.post('/cart/delete', Cart_contr_1.deleteCart);
exports.default = router;
