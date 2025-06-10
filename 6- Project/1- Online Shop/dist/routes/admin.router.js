"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const Admin_contr_1 = require("../controllers/Admin.contr");
const isAdmin_midd_1 = require("../middleware/isAdmin.midd");
// Use Function Router
const router = express_1.default.Router();
// get Product
router.get('/addproduct', isAdmin_midd_1.isAdminCheck, Admin_contr_1.AddProduct);
exports.default = router;
