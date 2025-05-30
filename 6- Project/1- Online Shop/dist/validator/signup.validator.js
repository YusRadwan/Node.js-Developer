"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSignup = void 0;
const express_validator_1 = require("express-validator");
exports.validSignup = [
    (0, express_validator_1.body)('username').notEmpty().isLength({ min: 3 }).withMessage('This field must contain an username, And have more than 2 Characters'),
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('This field must contain an Email'),
    (0, express_validator_1.body)('password').notEmpty().isLength({ min: 3 }).withMessage('This field must contain an Password and have more than 2 Numbers')
];
