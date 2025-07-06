// Import
    const express = require('express');

// Import Files
    const User = require('../models/userDB');


// Get Page Login
    let getLogin = (req, res) => {
        res.render('user/login', {
            success: req.flash('success'),
            error: req.flash('error')
        });
    }

// Get Page Signup
    let getSignup = (req, res) => {
        res.render('user/signup', {
            error: req.flash('error')
        });
    }

// Get Page Profile
    let getProfile = (req, res) => {
        res.render('user/profile', {
            success: req.flash('success')
        });
    }

// logout Function
    let getlogout = (req, res, next) => {
        req.logout((err) => {
            if (err) { return next(err); }
            res.redirect('/');
        });
    }

// Upload Profile Image
    let uploadAvatar = async (req, res) => {
        let newFields = {
            avatar: req.file.filename
        }

        let uploadImage = await User.updateOne({_id: req.user._id}, newFields)

        if (uploadImage) {
            res.redirect('/profile');
        }
    }


module.exports = {
    getLogin,
    getSignup,
    getProfile,
    getlogout,
    uploadAvatar
}