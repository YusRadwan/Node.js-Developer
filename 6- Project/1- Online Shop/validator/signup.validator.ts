import { body, ValidationChain } from "express-validator";

export let validSignup = [
    body('username').notEmpty().isLength({min: 3}).withMessage('This field must contain an username, And have more than 2 Characters'),
    body('email').notEmpty().isEmail().withMessage('This field must contain an Email'),
    body('password').notEmpty().isLength({min: 3}).withMessage('This field must contain an Password and have more than 2 Numbers')
];