const express = require('express');
const app = express();
require('dotenv').config();
const expresslayouts = require('express-ejs-layouts');


// Template engine
app.set('view engine', 'ejs');
app.use(expresslayouts);
app.set('layout', './layouts/main');

// Static Folder
app.use(express.static('public'));


// Server Routes
app.use('/', require('./server/routes/main'));


const Port = process.env.PORT || 5000;
app.listen(Port, (err)=> {
    if(!err) {
        console.log(`App is Listen on Port ${Port}`);
    } else {
        console.log(err);
    }
});