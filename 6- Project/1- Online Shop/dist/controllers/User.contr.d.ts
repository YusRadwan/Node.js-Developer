import { Request, Response, NextFunction } from 'express';
declare module 'express-session' {
    interface SessionData {
        user?: {
            username: String;
        };
    }
}
export declare let getSignup: (req: Request, res: Response) => void;
export declare let getLogin: (req: Request, res: Response) => void;
export declare let signupUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare let loggingUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
