import { Request, Response, NextFunction } from 'express';

export default (routeHandler: (req: Request, res: Response) => Promise<void>) => {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await routeHandler(req, res);
        } 
        catch (err) {
            next(err);
        }
    }
}