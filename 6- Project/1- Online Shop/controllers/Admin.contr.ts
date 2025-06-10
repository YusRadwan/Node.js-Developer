// Import
    import { Request, Response, NextFunction } from "express";

// Get Add Product
    export let AddProduct = (req: Request, res: Response) => {
        res.render('../views/pages/addProduct', {
            isUser: false,
            isAdmin: req.session.isAdmin
        })
    }