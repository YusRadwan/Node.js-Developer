// Import
    import express, { Router } from "express"
    import {postCart, getCart, EditCart, deleteCart} from '../controllers/Cart.contr';
    import { isUser, notUser } from "../middleware/IsUser.midd";

// Use Function Router
    const router: Router = express.Router();


    // Get Cart
        router.get('/cart', isUser, getCart);

    // post Cart
        router.post('/cart', isUser, postCart);

    // Edit On item
        router.post('/cart/save', EditCart);

    // Delete Item
        router.post('/cart/delete', deleteCart)


export default router;
