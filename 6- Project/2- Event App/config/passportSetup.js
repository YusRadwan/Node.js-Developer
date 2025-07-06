// Import
    const passport = require('passport');
    const localStrategy = require('passport-local').Strategy;
    const User = require('../models/userDB');
    const bcrypt = require('bcrypt-nodejs');

// Saving user object in the Session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        done(null, user);
    });

// Signup User
    passport.use('local.signup', new localStrategy ({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // To get data from body
    }, async (req, email, password, done) => { // Write here Configuration
        try {
            if(req.body.password != req.body.confirmPassword) {
                return done(null, false, req.flash('error', 'Passwords not Matches'))
            } else {
                const user = await User.findOne({email});
                if(user) {
                    return done(null, false, req.flash('error', 'Email is Exists'));
                } else {
                    let newUSer = new User({
                        email: req.body.email,
                        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
                        avatar: "profile.png"
                    })
                    await newUSer.save();
                    return done(null, newUSer, req.flash('success', 'Account is Created'));
                }
            }
        } catch (err) {
            return done(err);
        }
    }));

// login User
    passport.use('local.login', new localStrategy ({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // To get data from body
    }, async (req, email, password, done) => { // Write here Configuration
        try {
            const user = await User.findOne({email});
            if(!user) {
                return done(null, false, req.flash('error', 'User is not Found'));
            } else {
                const passCompaire = bcrypt.compareSync(password, user.password);
                if(!passCompaire) {
                    return done(null, false, req.flash('error', 'Password is Wrong'));
                } else {
                    return done(null, user, req.flash('success', 'Welcome back'))
                }
            }
        } catch (err) {
            return done(err);
        }
    }));