"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validProduct = void 0;
const express_validator_1 = require("express-validator");
exports.validProduct = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('This field must contain a value').isLength({ min: 3 }).withMessage('This field must contain a name Product, And have more than 2 Characters'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('This field must contain a value').isNumeric().withMessage('This field must contain a Number'),
    (0, express_validator_1.body)('category').notEmpty().withMessage('This field must contain a value'),
    (0, express_validator_1.body)('description').notEmpty().withMessage('This field must contain a value').isLength({ min: 3 }).withMessage('This field must contain a description to Product'),
    (0, express_validator_1.body)('image').custom((value, { req }) => {
        if (req.file) {
            return true;
        }
        else {
            throw new Error("Please upload image to product");
        }
    })
];
