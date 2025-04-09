// Import 
    import { Request, Response } from 'express';
    import Product from '../models/ProductDB';
    import asyncFunction from '../middleware/async';


// Get All Products
    export let getProducts = asyncFunction(async (req: Request, res: Response) => {
                try{
                    // let category = req.body.category;
                    // console.log(category);
                    let Prod = await Product.find({});
                    res.status(200).render('index', {Prod});
                    // if (category && category !== "all") {
                    //     let Prod = await Product.find({});
                    //     res.status(200).render('index', {Prod});
                    // } else {
                    //     let ProdName = await Product.find({category});
                    //     res.status(200).render('index', {ProdName});
                    // }
                    
                }
                catch (err) {
                    // console.log("Error in Product Controller");
                    res.send(err);
                }
            });

