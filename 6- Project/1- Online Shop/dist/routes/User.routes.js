"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const User_contr_1 = require("../controllers/User.contr");
const login_validator_1 = require("../validator/login.validator");
const signup_validator_1 = require("../validator/signup.validator");
const IsUser_midd_1 = require("../middleware/IsUser.midd");
// Use Function Router
const router = express_1.default.Router();
// Get Signup
router.get('/signup', IsUser_midd_1.notUser, User_contr_1.getSignup);
// Logging
router.get('/login', IsUser_midd_1.notUser, User_contr_1.getLogin);
// Add User
router.post('/signup', signup_validator_1.validSignup, User_contr_1.signupUsers);
// Login By User
router.post('/login', login_validator_1.validLogin, User_contr_1.loggingUsers);
// Logging Out
router.get('/logout', IsUser_midd_1.isUser, User_contr_1.logout);
// Get Cart
router.get('/cart', IsUser_midd_1.isUser, User_contr_1.getCart);
// post Cart
router.post('/cart', IsUser_midd_1.isUser, User_contr_1.postCart);
// Export
exports.default = router;
