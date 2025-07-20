const express = require('express');
const User = require('../models/Userdb');
const Post = require('../models/Postdb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;
const adminLayout = '../views/layouts/admin.ejs';
// admin Page
    // Get Admin Page
        let getloginAdmin = (req, res) => {
            try {
                const locals = {
                    title: "Admin Panel",
                    description: "Simple Blog created with NodeJs, Express & MongoDb."
                }

                res.render('admin/index', {
                    locals,
                    layout: adminLayout
                });
            } catch (err) {
                console.log(err);
                res.send(err);
            }
        }

    // Login by Admin
        let loginAdmin = async (req, res) => {
            try {
                const {username, password} = req.body;
                const user = await User.findOne({username});
                if (user && await bcrypt.compare(password, user.password)) {
                    const token = jwt.sign({userId: user._id}, jwtSecret);
                    res.cookie('token', token, {httpOnly: true});
                    res.redirect('admin/dashboard');
                } else {
                    res.send('admin Is not Found');
                }
            } catch (err) {
                console.log(err);
                res.send(err);
            }
        }

// Register Page
    // Get Register Page
        let getRegister = (req, res) => {
            const locals = {
                title: "Register",
                description: "Simple Blog created with NodeJs, Express & MongoDb."
            }
            try {
                res.render('admin/registerAdmin', {locals, layout: adminLayout});
            } catch (err) {
                console.log(err)
            }
        }

    // Create New Admin
        let createAdmin = async (req, res) => {
            try {
                const {username, password} = req.body;
                const user = await User.findOne({username});
                if (!user) {
                    let hashPass = await bcrypt.hash(password, 10);
                    let newUser = User.create({username, password: hashPass});
                    (await newUser).save();
                    res.render('admin/index');
                } else {
                    res.send('This admin is Exist');
                }
            } catch (err) {
                console.log(err);
            }
        }

// Dashboard Page
    // Get dashboard
        let getdashboard = async (req, res) => {
            const locals = {
                title: "Dashboard",
                description: "Simple Blog created with NodeJs, Express & MongoDb."
            }
            try {
                const data = await Post.find();
                res.render('admin/dashboard', {
                    data,
                    locals,
                    layout: adminLayout
                });
            } catch (err) {
                console.log(err)
            }
        }

// Add Post Page
    // Get Add-Post
        let addPost = (req, res) => {
            const locals = {
                title: "Add Post",
                description: "Simple Blog created with NodeJs, Express & MongoDb."
            }
            try {
                res.render('admin/add-post', {locals, layout: adminLayout});
            } catch (err) {
                console.log(err)
            }
        }

    // Create New Post
        let addNewPost = async (req, res) => {
            try {
                const newPost = new Post({
                    title: req.body.title,
                    body: req.body.body
                });
                await newPost.save();
                res.redirect('/admin/dashboard');
            } catch (err) {
                console.log(err)
            }
        }

// Edit Post Page
    // Get Edit-Post
        let editPost = async (req, res) => {
            const locals = {
                title: "Edit Post",
                description: "Simple Blog created with NodeJs, Express & MongoDb."
            }
            try {
                const data = await Post.findOne({ _id : req.params.id});
                res.render('admin/edit-post', {locals, data, layout: adminLayout});
            } catch (err) {
                console.log(err);
            }
        }

    // Update Post
        let updatePost = async (req, res) => {
            try {
                const update = await Post.findByIdAndUpdate({_id : req.params.id }, {
                    title: req.body.title,
                    body: req.body.body,
                    createdAt: Date.now()
                });
                res.redirect(`/admin/edit-post/${req.params.id}`);
            } catch (err) {
                console.log(err)
            }
        }

    // Delete Post
        let deletePost = async (req, res) => {
            try {
                await Post.deleteOne({ _id : req.params.id });
                res.redirect('/admin/dashboard');
            } catch (err) {
                console.log(err)
            }
        }

// LogOut
    let logOutAdmin = (req, res) => {
        try {
            res.clearCookie('token');
            res.redirect('/');
        } catch (err) {
            console.log(err)
        }
    }

module.exports = {
    getloginAdmin,
    loginAdmin,
    getRegister,
    createAdmin,
    getdashboard,
    addPost,
    addNewPost,
    editPost,
    updatePost,
    deletePost,
    logOutAdmin
}