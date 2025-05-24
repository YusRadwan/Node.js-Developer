// Import
    const express = require("express");
    require("dotenv").config();

// Callback Databasse
    const db = require('./config/database');

// Callback Express Function
    const app = express();

// Bring ejs Template
    app.set("view engine", "ejs");

// Bring Static Pages
    app.use(express.static("assets"));
    app.use(express.static("node_modules"));

// Print Hello
    app.get('/', (req,res)=> {
        res.render('event/index');
    });

// Servers
    // Bring Variable From .env
        const port = process.env.PORT || 3000;
    
    // Run Server
    app.listen(port, (err)=> {
        if(err){
            console.log(err);
        }else {
            console.log(`Event App is Listen on Port: ${port}`);
        }
    });

