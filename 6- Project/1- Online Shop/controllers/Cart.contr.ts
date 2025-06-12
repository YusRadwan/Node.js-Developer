// Import
    import { Request, Response, NextFunction } from 'express';
    import Cart from './../models/CartDB';

// Get Cart
    export let getCart = async(req: Request, res: Response) => {
        try {
            let userCart = await Cart.find({userId: req.session.userid}, {}, {sort: {timestamp: 1 }});
            res.render('../views/pages/cart.ejs', {
                items: userCart,
                isUser: req.session.userid,
                isAdmin: req.session.isAdmin,
                titlePage: 'Cart'
            });
        } catch(err) {
            console.log(err);
            res.send(err);
        }
    }

// Save Cart
    export let postCart = async (req: Request, res: Response) => {
        try {
            const {amount, name , price, productId, redirectTo} = req.body;
            let cart = new Cart({
                name: name,
                price: price,
                amount: amount,
                userId: req.session.userid,
                productId: productId,
                timestamp: Date.now()
            });
            cart.save();
            let userCart = await Cart.find({userId: req.session.userid}, {}, {sort: {timestamp: 1 }});
            res.render('../views/pages/cart.ejs', {
                items: userCart,
                isUser: req.session.userid,
                isAdmin: req.session.isAdmin
            });
        } catch(err) {
            console.log(err);
            res.send(err);
        }

    }

// Edit Cart
    export let EditCart = async (req: Request, res: Response) => {
        try {
            const {itemOfCardID, amountEdit} = req.body;
            let updateResulst = await Cart.updateOne({_id: itemOfCardID}, {
                $set: {
                    amount: amountEdit,
                    timestamp: Date.now()
                }
            });
            res.redirect('/cart');
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }

// Delete Cart
    export let deleteCart = async (req: Request, res: Response) => {
        try {
            const {itemOfCardID} = req.body;
            let deleteResult = await Cart.findByIdAndDelete(itemOfCardID);
            res.redirect('/cart');
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }