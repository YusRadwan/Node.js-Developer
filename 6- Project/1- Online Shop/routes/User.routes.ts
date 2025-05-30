// Import
    import express, { Router } from "express"
    import {loggingUsers, signupUsers, getSignup, getLogin} from '../controllers/User.contr'
    import { validLogin } from "../validator/login.validator";
    import { validSignup } from "../validator/signup.validator";

// Use Function Router
    const router: Router = express.Router();

    // Get Signup
        router.get('/signup', getSignup)

    // Logging
        router.get('/login', getLogin);

    // Add User
        router.post('/signup', validSignup, signupUsers);

    // Login By User
        router.post('/login', validLogin, loggingUsers);


// Export
    export default router;