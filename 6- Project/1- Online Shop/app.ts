// Import
    import express, { Request, Response, NextFunction } from "express";
    import mongoose, { get } from "mongoose";
    import session from "express-session";
    import MongoStore from "connect-mongo";
    import dotenv from "dotenv";


// Import Files
    import homeRouter from "./routes/Home.routes";
    import productRouter from "./routes/Product.routes";
    import userRouter from "./routes/User.routes";
    import locat from './middleware/location';



// use Express
    const app = express();
    dotenv.config();

// Middlewares
    // body-parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

    // Read Path
        app.use(express.static('images')); // Files From Folder
        app.use('/assets', express.static('assets')); // From Folders

// Use Session
    app.use(session({
        secret: process.env.SESSION_SECRET!,
        resave: false, // Don't save session if not find change
        saveUninitialized: false, // save new session even if empty 
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 Day
        },
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
            collectionName: "sessions"
        })
    }));

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



// Routes
    app.use('/', homeRouter, userRouter);
    app.use('/home', locat, homeRouter);
    app.use('/product', productRouter);

// Server Listen
    const port = process.env.PORT || 4000;
    app.listen(port, (err?: Error | null) => {
        console.log(err);
        console.log(`App Is Listen On Port ${port}`);
    });
