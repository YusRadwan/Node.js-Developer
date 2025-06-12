// Import
    import { Request, Response, NextFunction } from "express";
    import { validationResult } from "express-validator";
    import Product from '../models/ProductDB';

// Get Add Product
    export let getAddProduct = (req: Request, res: Response) => {
        res.render('../views/pages/addProduct', {
            errors: false,
            isUser: false,
            isAdmin: req.session.isAdmin,
            titlePage: 'Add Product'
        })
    }

    export let addProduct = async (req: Request, res: Response) => {
            try{
                let result = validationResult(req);
                const {name, price, category, description} = req.body;
                if(result.isEmpty()) {
                    let product = await Product.findOne({name: name});
                    if (product) {
                        console.log(`${product.name} Product Is exists`);
                        res.redirect('/addProduct');
                    }else {
                        let prod = new Product ({
                            name: name,
                            price: price,
                            category: category,
                            description: description,
                            image: req.file?.filename
                        });
                        prod.save();
                        res.redirect('/');
                    }
                } else {
                    console.log(`Errors in fields when try Add Product`);
                    res.render('../views/pages/addProduct.ejs', {
                        errors: result.array(),
                        isUser: false,
                        isAdmin: req.session.isAdmin
                    });
                }
            }
            catch (err) {
                console.log(err);
                res.send(`Error in Signup User Controller`);
            }
    }