const express = require('express');
const Post = require('../models/Postdb');

// Get Home Page
    let getHome = async (req, res) => {
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
        }

// Get Post By ID
    let getPostById = async (req, res) => {
        try {
            const data = await Post.findById({_id: req.params.id});
            const locals = {
                title: data.title,
                description: "Simple Blog Created By NodeJS, Express & MongoDB"
            }
            res.render('post', {locals, data});
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }

// Post Search 
    let postSearch = async (req, res) => {
        try {
            const locals = {
                title: "Search Result",
                description: "Simple Blog Created By NodeJS, Express & MongoDB"
            }

            let searchTerm = req.body.searchTerm;
            const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, ""); // Block special symbols

            const data = await Post.find({
                $or: [
                    // regex => We use it for partial search
                    // new RegExp => The text is converted to Regular Expression
                    // i => Case insensitive
                    {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
                    {body: {$regex: new RegExp(searchNoSpecialChar, 'i')}}
                ]
            });

            res.render('search', {locals, data});
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }



module.exports = {
    getHome,
    getPostById,
    postSearch
}