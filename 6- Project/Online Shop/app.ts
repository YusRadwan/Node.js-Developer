// Import
    import express, { Request, Response } from "express";
    import path from "path";
    import mongoose from "mongoose";

// Import Files
    import homeRouter from "./routes/Home.routes";
    // import Product from "./models/ProductDB";

// use Express
    const app = express();

// Middlewares
    // body-parser
        app.use(express.json());

    // Read Path
        app.use(express.static(path.join(__dirname, 'assets')));
        app.use(express.static(path.join(__dirname, 'images')));

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
    app.use('/', homeRouter);


// Server Listen
    const PORT: number = 3000;
    app.listen(PORT, (err?: Error | null) => {
        console.log(err);
        console.log(`App Is Listen On Port ${PORT}`);
    });
