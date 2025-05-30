// Import 
    import { Request, Response } from 'express';
    import Product from '../models/ProductDB';
    import asyncFunction from '../middleware/async';

// Get All Products
    export let getProducts = asyncFunction(async (req: Request, res: Response) => {
                try{
                    let cate = req.query.category; // Query String Parameters
                    // console.log(`Category is: ${cate}`);
                    if (cate && cate !== "all") {
                        let Prod = await Product.find({category: cate});
                        res.status(200).render('index', {Prod});
                    } else {
                        let Prod = await Product.find({});
                        res.status(200).render('index', {Prod});
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
                    res.render('pages/product', {ProdID} );
                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Product ID Controller`);
                }
            });