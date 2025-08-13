const express = require('express');
const router = express.Router();

const authjwtMiddleware = require('../middleware/authjwt');
const checkRole = require('../middleware/checkRole');

// Dashboard
    router.get('/dashboard', authjwtMiddleware, checkRole('admin'), (req, res) => {
        res.status(200).json({msg: 'Welcome Dashboard Page', user: req.user});
    });

module.exports = router;