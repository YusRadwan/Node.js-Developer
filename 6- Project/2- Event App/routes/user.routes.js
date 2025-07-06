// Import
    const express = require('express');
    const router = express.Router();
    const passport = require('passport');
    const passportSetup = require('../config/passportSetup');
    const multer = require('multer');

// Multer Storage
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload/images')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
        }
    })
    const upload = multer({ storage: storage })


// Import File
    const controlerUser = require('../controllers/user.contr');
    const isAuthentication = require('../middleware/isAuth.midd');

// Get Request for page
    // Login
        router.get('/login', controlerUser.getLogin);

    // Signup
        router.get('/signup', controlerUser.getSignup);

    // Profile
        router.get('/profile', isAuthentication, controlerUser.getProfile);

    // logout
        router.get('/logout', isAuthentication, controlerUser.getlogout);

// Post Request for page
    // signup
        router.post('/signup', 
            passport.authenticate('local.signup', {
                successRedirect: '/login',
                failureRedirect: '/signup',
                failureMessage: true
            })
        );

    // Login
        router.post('/login', 
            passport.authenticate('local.login', {
                successRedirect: '/profile',
                failureRedirect: '/login',
                failureMessage: true
            })
        );

    // Upload Profile Image
        router.post('/uploadAvatar', upload.single('avatar'), controlerUser.uploadAvatar)


module.exports = router;