import { NextFunction, Response, Request } from 'express';

export let isAdminCheck = (req: Request, res: Response, nxt: NextFunction) => {
    req.session.isAdmin ? nxt() : res.send("You Should Be Admin To Manage Orders or Add Product")
}
