// Import 
    import { Request, Response, NextFunction } from 'express';
    import User from './../models/UserDB';
    import asyncFunction from '../middleware/async';
    import * as bcrypt from 'bcrypt';

// Get Signup
    export let getSignup = (req: Request, res: Response) => {
        res.render('../views/pages/signup.ejs');
    };

// Get Login
    export let getLogin = (req: Request, res: Response) => {
        res.render('../views/pages/login.ejs');
    };


// Create Account
    export let signupUsers = asyncFunction(async (req: Request, res: Response) => {
                try{
                    let users = await User.findOne({email: req.body.email});
                    if (users) {
                        res.status(404).send('Account is Exists, Please back and Login');
                        console.log(`${users.email} Account Is exists`);
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
                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Signup User Controller`);
                }
            });

// Loggin Account
    export let loggingUsers = asyncFunction(async (req: Request, res: Response) => {
                
                try{
                    const emailUser = await User.findOne({email: req.body.email});
                    if(emailUser) {
                        const passwordUser = await bcrypt.compare(req.body.password, emailUser.password);
                        console.log(`Password is Exists: ${passwordUser}`);

                        console.log(`Welcome ${emailUser} in Website`);
                        res.redirect('/home');
                    } else {
                        console.log('Error in Password Or Email When try Login');
                        res.status(404).redirect('/login');
                    }
                }
                catch (err) {
                    console.log(err);
                    res.send(`Error in Logging User Controller`);
                }
            });