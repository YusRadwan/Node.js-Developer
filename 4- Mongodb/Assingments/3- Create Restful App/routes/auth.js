// Import
    // Modules
        const express = require("express");
        const router = express.Router();
        const bcrypt = require("bcrypt");
        const config = require("config");
    // Middlewares
        const validator = require("../middlewares/AuthMWValidator");
        const asynFunction = require("../middlewares/async");
    // Models
        const users = require("../models/UserModelDB");


router.post("/", validator, asynFunction(async (req, res) => {
        // Check Email
            let user = await users.findOne({email: req.body.email}).exec();
            if (!user) return res.status(400).send("Invalid Email Or Password ...!!!");

        // Check Password
            let validpass = await bcrypt.compare(req.body.password, user.password);
            if (!validpass) return res.status(400).send("Invalid Password Or Email");

        // Send Token Withen Response to Client
            console.log(`the Secret Key for token is : ${config.get("jwtsec")}`);
            if(!config.get("jwtsec")) return res.status(500).send(`Token Secret-Key Not Found ...!!!`);
            const token = user.genAuthToken();

        // Respond
            res.header("x-auth-token", token);
            res.status(200).send(`Logged-in Successfully, and token is save in Header`);
    }));


module.exports = router;