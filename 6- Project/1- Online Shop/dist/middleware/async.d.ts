import { Request, Response, NextFunction } from 'express';
declare const _default: (routeHandler: (req: Request, res: Response) => Promise<void>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default _default;
