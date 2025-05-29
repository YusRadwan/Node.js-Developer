"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const User_contr_1 = require("../controllers/User.contr");
// Use Function Router
const router = express_1.default.Router();
// Get Signup
router.get('/signup', User_contr_1.getSignup);
// Logging
router.get('/login', User_contr_1.getLogin);
// Add User
router.post('/signup', User_contr_1.signupUsers);
// Login By User
router.post('/login', User_contr_1.loggingUsers);
// Export
exports.default = router;
