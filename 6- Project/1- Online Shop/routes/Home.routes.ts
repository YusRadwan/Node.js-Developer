// Import
    import express, { Router } from "express";
    import {getProducts} from '../controllers/Product.contr';

// Use Function Router
    const router: Router = express.Router();

// Get All Products
    router.get('/', getProducts);

// Export
    export default router;