const express = require('express');
const app = express();
require('dotenv').config();
const expresslayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connect = require('./server/config/db');

// Database Connect
    connect();

// Body Parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

// Cooki Parser
    app.use(cookieParser());

// Session
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),
        //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
    }));

// Template engine
    app.set('view engine', 'ejs');
    app.use(expresslayouts);
    app.set('layout', './layouts/main');

// Static Folder
    app.use(express.static('public'));


// Server Routes
    app.use('/', require('./server/routes/main'));
    app.use('/', require('./server/routes/admin'));


// Server
    const Port = process.env.PORT || 5000;
    app.listen(Port, (err)=> {
        if(!err) {
            console.log(`App is Listen on Port ${Port}`);
        } else {
            console.log(err);
        }
    });