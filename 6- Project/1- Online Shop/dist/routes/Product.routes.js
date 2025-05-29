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
// Get Product By ID
router.get('/:id', Product_contr_1.getProductById);
// Export
exports.default = router;
