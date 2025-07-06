// Import Library
    const mongoose = require('mongoose');

// Create Schema
    const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            require: true
        }
    });

// Create Model
    const User = mongoose.model('user', userSchema);


// Export collection User
    module.exports = User;