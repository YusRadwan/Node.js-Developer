const express = require('express');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

let authAdmin = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (token) {
            const decoded = jwt.verify(token, jwtSecret);
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(401).send('This admin is Unauthorized');
        }
    } catch (err) {
        res.status(401).send('This admin is Unauthorized');
    }
}

module.exports = authAdmin;