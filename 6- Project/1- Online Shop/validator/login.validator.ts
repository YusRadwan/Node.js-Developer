import { body, ValidationChain } from "express-validator";

export let validLogin = [
    body('email').notEmpty().isEmail().withMessage('The field must contain an Email'),
    body('password').notEmpty().isLength({min: 3}).withMessage('The field must contain an Password and have more than 2 Numbers')
];