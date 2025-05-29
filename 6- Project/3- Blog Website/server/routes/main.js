const express = require('express');
const router = express.Router();
const Post = require('../models/Postdb');

// Get Home Page
router.get('/', async (req, res) => {
    try {
        const locals = {
            title: 'NodeJS Blog',
            description: 'Simple Blog created with NodeJs, Express & MongoDb.'
        }

        let perPage = 8;
        let page = req.query.page || 1;


        const dataPost = await Post.aggregate([{ $sort: {createdAt: -1} }])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        const count = await Post.countDocuments({});
        const nextPage = parseInt(page) + 1;
        // This condition checks if the next page number is Less than or equal to total number of pages
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        res.render('index', { 
            locals,
            dataPost,
            current: page,
            nextPage: hasNextPage ? nextPage : null,
            currentRoute: '/'
        });

    } catch (err) {
        console.log(err);
    }
});

// Get About Page
router.get('/about', (req, res) => {
    res.render('about');
});

// Get Contact Page
router.get('/contact', (req, res) => {
    res.render('contact');
});


module.exports = router;