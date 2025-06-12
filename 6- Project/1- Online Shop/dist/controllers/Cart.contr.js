"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.EditCart = exports.postCart = exports.getCart = void 0;
const CartDB_1 = __importDefault(require("./../models/CartDB"));
// Get Cart
let getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userCart = yield CartDB_1.default.find({ userId: req.session.userid }, {}, { sort: { timestamp: 1 } });
        res.render('../views/pages/cart.ejs', {
            items: userCart,
            isUser: req.session.userid,
            isAdmin: req.session.isAdmin,
            titlePage: 'Cart'
        });
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
exports.getCart = getCart;
// Save Cart
let postCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, name, price, productId, redirectTo } = req.body;
        let cart = new CartDB_1.default({
            name: name,
            price: price,
            amount: amount,
            userId: req.session.userid,
            productId: productId,
            timestamp: Date.now()
        });
        cart.save();
        let userCart = yield CartDB_1.default.find({ userId: req.session.userid }, {}, { sort: { timestamp: 1 } });
        res.render('../views/pages/cart.ejs', {
            items: userCart,
            isUser: req.session.userid,
            isAdmin: req.session.isAdmin
        });
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
exports.postCart = postCart;
// Edit Cart
let EditCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { itemOfCardID, amountEdit } = req.body;
        let updateResulst = yield CartDB_1.default.updateOne({ _id: itemOfCardID }, {
            $set: {
                amount: amountEdit,
                timestamp: Date.now()
            }
        });
        res.redirect('/cart');
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
exports.EditCart = EditCart;
// Delete Cart
let deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { itemOfCardID } = req.body;
        let deleteResult = yield CartDB_1.default.findByIdAndDelete(itemOfCardID);
        res.redirect('/cart');
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
exports.deleteCart = deleteCart;
