// Import
    import express, { Router } from "express";
    import {getProductById} from '../controllers/Product.contr';

// Use Function Router
    const router: Router = express.Router();

// Get Product By ID
    router.get('/:id', getProductById);

// Export
    export default router;