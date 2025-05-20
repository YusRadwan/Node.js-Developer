// Import
    import express, { Router } from "express"
    import {loggingUsers, signupUsers, getSignup, getLogin} from '../controllers/User.contr'

// Use Function Router
    const router: Router = express.Router();

    // Get Signup
        router.get('/signup', getSignup)

    // Logging
        router.get('/login', getLogin);

    // Add User
        router.post('/signup', signupUsers);

    // Login By User
        router.post('/login', loggingUsers);


// Export
    export default router;