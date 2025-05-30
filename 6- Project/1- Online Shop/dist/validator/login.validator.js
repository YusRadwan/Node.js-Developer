"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validLogin = void 0;
const express_validator_1 = require("express-validator");
exports.validLogin = [
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('The field must contain an Email'),
    (0, express_validator_1.body)('password').notEmpty().isLength({ min: 3 }).withMessage('The field must contain an Password and have more than 2 Numbers')
];
