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

                res.render('admin/index', {locals, layout: adminLayout})
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
            try {
                res.render('admin/registerAdmin');
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
            try {
                const data = await Post.find();
                res.render('admin/dashboard', {data});
            } catch (err) {
                console.log(err)
            }
        }


module.exports = {
    getloginAdmin,
    loginAdmin,
    getRegister,
    createAdmin,
    getdashboard
}