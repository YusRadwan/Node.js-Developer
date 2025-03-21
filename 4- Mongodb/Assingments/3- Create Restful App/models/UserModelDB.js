// 1) Import Mongoose
const mongoose = require("mongoose");
const valid = require("validator");
const jwt = require("jsonwebtoken");
const config = require("config");

// 3) Create Schema
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true,
            minlength: 3,
            maxlenght: 50,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {validator: (v) => { return valid.isEmail(v)}},
            message: '{VALUE} is Not Valid Email'
        },
        isAdmin: {type: Boolean},
        password: {
            type: String,
            required: true,
            minlength: 6
        }
    });

    userSchema.method("genAuthToken", function () {
        const token = jwt.sign({
            userid: this._id, 
            adminRole: this.isAdmin
        }, config.get("jwtsec"));

        return token;
    });

// 4) Create Model
    const Users = mongoose.model("Users", userSchema);


module.exports = Users;