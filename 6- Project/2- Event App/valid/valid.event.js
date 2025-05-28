const express = require('express');
const {body} = require('express-validator');


const validEvent = [
    body('title').isLength({min: 5}).withMessage('Title should be more than 5 char'),
    body('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
    body('location').isLength({min: 3}).withMessage('Location should be more than 5 char'),
    body('date').isLength({min: 5}).withMessage('Date should valid Date')
];


module.exports = {
    validEvent
};
