import { Request, Response, NextFunction } from "express";

export let isUser = (req: Request, res: Response, nxt: NextFunction) => {
    if (req.session.user) nxt();
    else res.redirect('/login');
}

export let notUser = (req: Request, res: Response, nxt: NextFunction) => {
    if (!req.session.user) nxt();
    else res.redirect('/');
}