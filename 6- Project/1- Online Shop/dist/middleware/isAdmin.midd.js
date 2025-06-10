"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminCheck = void 0;
let isAdminCheck = (req, res, nxt) => {
    req.session.isAdmin ? nxt() : res.send("You Should Be Admin To Manage Orders or Add Product");
};
exports.isAdminCheck = isAdminCheck;
