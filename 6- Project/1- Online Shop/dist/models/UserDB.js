"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Mongosse
const mongoose_1 = require("mongoose");
// Create Schema
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// Create Model
const User = (0, mongoose_1.model)('user', userSchema);
// Export Product
exports.default = User;
