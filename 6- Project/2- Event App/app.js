// Import
    const express = require("express");
    require("dotenv").config();
    const db = require('./config/database');


// Bring
    const app = express();

// Bring Variable From .env
    const port = process.env.PORT || 3000;

// Bring ejs Template
    app.set("view engine", "ejs");

// Bring Static Pages
    app.use(express.static("assets"));
    app.use(express.static("node_modules"));

// Print Hello
    app.get("/", (req,res)=> {
        res.render('event/index.ejs');
    });

// Server Listen
    app.listen(port, (err)=> {
        console.log(err);
        console.log(`Event App is Listen on Port: ${port}`);
    });