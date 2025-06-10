// Import 
    import { Request, Response } from 'express';
    import Product from '../models/ProductDB';
    import asyncFunction from '../middleware/async';

// Get All Products
    export let getProducts = asyncFunction(async (req: Request, res: Response) => {
                try{
                    let cate = req.query.category; // Query String Parameters
                    if (cate && cate !== "all") {
                        let Prod = await Product.find({category: cate});
                        res.status(200).render('index', {
                            products: Prod,
                            isUser: false,
                            isAdmin: req.session.isAdmin
                        });
                    } else {
                        let Prod = await Product.find({});
                        res.status(200).render('index', {
                            products: Prod,
                            isUser: req.session.userid,
                            isAdmin: req.session.isAdmin
                        });
                    }
                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Product Controller`);
                }
            });

// Get Product By ID
    export let getProductById = asyncFunction(async (req: Request, res: Response) => {
                try{
                    let ProdID = await Product.findById(req.params.id); // Routing Parameters
                    res.render('pages/product', {
                        productId: ProdID,
                        isUser: req.session.userid,
                        isAdmin: req.session.isAdmin
                    } );
                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Product ID Controller`);
                }
            });