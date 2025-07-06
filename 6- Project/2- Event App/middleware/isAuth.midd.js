// Import
    const express = require('express');


let isAuthentication = (req, res, next) => {
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
}

module.exports = isAuthentication;