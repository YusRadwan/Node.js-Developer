// Import 
    import { Request, Response, NextFunction } from 'express';
    import User from './../models/UserDB';
    import asyncFunction from '../middleware/async';
    import * as bcrypt from 'bcrypt';
    import { validationResult } from 'express-validator';

//  session.--- لتشمل Request تعديل واجهة 
    declare module 'express-session' {
        interface SessionData {
            user?: String;
            userid?: any;
            isAdmin?: Boolean;
        }
    }

// Get Signup
    export let getSignup = (req: Request, res: Response) => {
        res.render('../views/pages/signup.ejs', {
            errors: false,
            isUser: false,
            isAdmin: req.session.isAdmin,
            titlePage: 'Sign UP'
        });
    };

// Get Login
    export let getLogin = (req: Request, res: Response) => {
        res.render('../views/pages/login.ejs', {
            errors: false,
            isUser: false,
            isAdmin: req.session.isAdmin,
            titlePage: 'Login'
        });
    };

// Create Account
    export let signupUsers = asyncFunction(async (req: Request, res: Response) => {
                try{

                    let result = validationResult(req);
                    if(result.isEmpty()) {

                        let users = await User.findOne({email: req.body.email});
                        if (users) {
                            console.log(`${users.email} Account Is exists`);
                            res.redirect('/signup');
                        }else {
                            let hashPass = await bcrypt.hash(req.body.password, 10);
                            let user = new User ({
                                username: req.body.username,
                                email: req.body.email,
                                password: hashPass,
                            });
                            user.save();
                            res.redirect('/login');
                        }

                    } else {
                        console.log(`Errors in fields when try Signup`);
                        res.render('../views/pages/signup.ejs', {errors: result.array()});
                    }

                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Signup User Controller`);
                }
            });

// Loggin Account
    export let loggingUsers = asyncFunction(async (req: Request, res: Response) => {
                
                try{
                    let result = validationResult(req);
                    if(result.isEmpty()) {

                        const emailUser = await User.findOne({email: req.body.email});
                        // Check If User True
                            if(emailUser) {
                                const passwordUser = await bcrypt.compare(req.body.password, emailUser.password);
                                // Check if Password Same in Database
                                    if(passwordUser) {
                                        req.session.user = emailUser.username;
                                        req.session.userid = emailUser._id;
                                        req.session.isAdmin = emailUser.admin;
                                        console.log(`Hello ${emailUser.username} ${emailUser.admin ? '--> admin' : '--> user'}`);
                                        res.redirect('/');
                                    } else {
                                        console.log('Error in Password When Login please try again');
                                        res.status(401).redirect('/login');
                                    }
                            } else {
                                console.log('Error in Email When Login please try again');
                                let errormsg = `This Email (${req.body.email}) not Found`;
                                res.status(404).send(errormsg);
                            }

                    } else {
                        console.log(`Errors in fields when try Login`);
                        res.render('../views/pages/login.ejs', {errors: result.array()});
                    }

                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Logging User Controller`);
                }
            });

// Logging Out
    export let logout = (req: Request, res: Response) => {
        req.session.destroy( (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error Logging Out');
            }
            res.redirect('/');
        });
    }

