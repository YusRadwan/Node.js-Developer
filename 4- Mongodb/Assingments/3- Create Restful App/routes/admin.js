// Import
    // Modules
        const express = require("express");
        const router = express.Router();
    //Models
        const users = require("../models/UserModelDB");
    // MW
        const auth = require("../middlewares/AuthMWPermission");


// Update user Role
    router.put("/:id", auth, (req, res) => {
        users.findByIdAndUpdate({
            _id: req.params.id
        }, {
            isAdmin: true
        }, function (err, data) {
            if(!err) {
                if (data)
                    res.status(200).send("User Role is Set to Admin ...");
                else
                    res.status(400).send("User Not Found ...!!!");
            }
            else {    
                res.status(500).send("Internal Server Error ....");
            }
        });
    });



module.exports = router;