const express = require('express');
const router = express.Router();
const Post = require('../models/Postdb');
const controler = require('../controlers/main.contr');

// Get Home Page
    router.get('/', controler.getHome);

// Get About Page
    router.get('/about', (req, res) => {
        res.render('about');
    });

// Get Contact Page
    router.get('/contact', (req, res) => {
        res.render('contact');
    });

// Get Post By ID
    router.get('/post/:id', controler.getPostById);

// Post Search
    router.post('/search', controler.postSearch)


module.exports = router;