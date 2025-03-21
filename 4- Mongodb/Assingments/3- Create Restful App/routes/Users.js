// Import
    // Modules
        const express = require("express");
        const router = express.Router();
        const bcrypt = require("bcrypt");
        const config = require("config");
    // Middlewares
        const validator = require("../middlewares/UserMWValidator");
        const asynFunction = require("../middlewares/async");
    // Model    
        const users = require("../models/UserModelDB");

// Registration
    router.post("/", validator, asynFunction(async (req, res) => {
            // Check Already Exists
                let user = await users.findOne({email: req.body.email}).exec();
                if(user) return res.status(400).send("User Already Register ...!!!");
            // Create New User to DB
                // Hash Password
                    let salt = await bcrypt.genSalt(10);
                    let hashedPass = await bcrypt.hash(req.body.password, salt);
                    user = new users ({
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPass
                    });

                // Save New user 
                    await user.save();
                
                // Send Token Withen Response to Client
                    // Before Start App, You Must Set Variable Token => (Set jwtsecvar = Value)
                    if(!config.get("jwtsec")) return res.status(500).send("Token Secret-Key Not Found ...!!!");
                    const token = user.genAuthToken();

                // Response
                    res.header("x-auth-token", token);
                    res.status(200).send("Add user Succeded ...!!!");
    }));


module.exports = router;