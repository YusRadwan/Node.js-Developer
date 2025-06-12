// Import
    import express, { Router } from "express"
    import {getAddProduct, addProduct} from '../controllers/Admin.contr';
    import {isAdminCheck} from '../middleware/isAdmin.midd';
    import {validProduct} from '../validator/product.validator';
    import multer from "multer";

// Use Function Router
    const router: Router = express.Router();

// Multer Function
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'images/'); // مجلد حفظ الملفات
        },
        filename: function (req, file, cb) {
            // حفظ الملف باسم فريد
            const uniqueSuffix = Date.now() + '-' + file.originalname;
            cb(null, uniqueSuffix);
        }
    });
    const upload = multer({storage: storage});
    // Check if File Images is Exist
        import fs from 'fs';
        if (!fs.existsSync('images')) {
            fs.mkdirSync('images');
        }

// get Product
    router.get('/addproduct', isAdminCheck, getAddProduct);

// Add Product
    router.post('/addproduct', upload.single('image'), validProduct, addProduct);

// Export
export default router;
