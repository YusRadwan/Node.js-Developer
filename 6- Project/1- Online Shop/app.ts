// Import
    import express, { Request, Response, NextFunction } from "express";
    import mongoose, { get } from "mongoose";
    import session from "express-session";
    import connectMongo from "connect-mongodb-session";


// Import Files
    import homeRouter from "./routes/Home.routes";
    import productRouter from "./routes/Product.routes";
    import userRouter from "./routes/User.routes";
    import locat from './middleware/location';


// use Express
    const app = express();

// Middlewares
    // body-parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

    // Read Path
        app.use(express.static('images')); // Files From Folder
        app.use('/assets', express.static('assets')); // From Folders

    // 
        (req: Request, res: Response, next: NextFunction) => {
            console.log(req.path);
            next();
        }
// EJs
    app.set('view engine', 'ejs');
    app.set('views', 'views');

// Connection With DB
    mongoose.connect("mongodb://127.0.0.1:27017/online-shop")
        .then(() => {
            console.log("Database Connected ...!!!");
        }).catch((err: Error) => {
            console.log(err);
        });
    
    const MongoDBStore = connectMongo(session);
    const STORE = new MongoDBStore({
        uri: "mongodb://localhost:27017/online-shop",
        collection: "sessions"
    });

// Routes
    app.use('/', homeRouter, userRouter);
    app.use('/home', locat, homeRouter);
    app.use('/product', productRouter);

// Use Session
    app.use(session({
        secret: "This is a secret",
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 Day
        },
        store: STORE
    }));

// Server Listen
    const PORT: number = 3000;
    app.listen(PORT, (err?: Error | null) => {
        console.log(err);
        console.log(`App Is Listen On Port ${PORT}`);
    });
