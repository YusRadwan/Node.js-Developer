"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const Admin_contr_1 = require("../controllers/Admin.contr");
const isAdmin_midd_1 = require("../middleware/isAdmin.midd");
const product_validator_1 = require("../validator/product.validator");
const multer_1 = __importDefault(require("multer"));
// Use Function Router
const router = express_1.default.Router();
// Multer Function
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/'); // مجلد حفظ الملفات
    },
    filename: function (req, file, cb) {
        // حفظ الملف باسم فريد
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
// Check if File Images is Exist
const fs_1 = __importDefault(require("fs"));
if (!fs_1.default.existsSync('images')) {
    fs_1.default.mkdirSync('images');
}
// get Product
router.get('/addproduct', isAdmin_midd_1.isAdminCheck, Admin_contr_1.getAddProduct);
// Add Product
router.post('/addproduct', upload.single('image'), product_validator_1.validProduct, Admin_contr_1.addProduct);
// Export
exports.default = router;
