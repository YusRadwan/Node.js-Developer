"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notUser = exports.isUser = void 0;
let isUser = (req, res, nxt) => {
    if (req.session.user)
        nxt();
    else
        res.redirect('/login');
};
exports.isUser = isUser;
let notUser = (req, res, nxt) => {
    if (!req.session.user)
        nxt();
    else
        res.redirect('/');
};
exports.notUser = notUser;
