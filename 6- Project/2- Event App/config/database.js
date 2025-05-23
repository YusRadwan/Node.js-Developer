// Import
    const mongoose = require("mongoose");
    require('dotenv').config();

// Bring Variable From ENV
    const uri = process.env.MONGODB_URI;


let db = mongoose.connect(uri, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Connected To DB Succesfuly ...");
    }
});

module.exports = db;