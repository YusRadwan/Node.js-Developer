// Import
    const mongoose = require("mongoose");
    require('dotenv').config();

// Bring Variable From ENV
    const uri = process.env.MONGODB_URI;


let db = mongoose.connect(uri)
    .then(() => {
        console.log("Connected To DB Event-App is Succesfuly ...");
    }).catch((err) => {
        console.log(err);
    });
