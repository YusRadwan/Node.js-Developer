import { body, ValidationChain } from "express-validator";

export let validProduct = [
    body('name').notEmpty().withMessage('This field must contain a value').isLength({min: 3}).withMessage('This field must contain a name Product, And have more than 2 Characters'),
    body('price').notEmpty().withMessage('This field must contain a value').isNumeric().withMessage('This field must contain a Number'),
    body('category').notEmpty().withMessage('This field must contain a value'),
    body('description').notEmpty().withMessage('This field must contain a value').isLength({min: 3}).withMessage('This field must contain a description to Product'),
    body('image').custom((value, {req}) => {
        if (req.file) {
            return true
        } else {
            throw new Error("Please upload image to product");
        }
        
    })
];