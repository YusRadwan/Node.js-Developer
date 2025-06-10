// Import
    import express, { Router } from "express"
    import {AddProduct} from '../controllers/Admin.contr';
    import {isAdminCheck} from '../middleware/isAdmin.midd';

// Use Function Router
    const router: Router = express.Router();


    // get Product
        router.get('/addproduct', isAdminCheck, AddProduct);

export default router;
