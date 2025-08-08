const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRole');

// Dashboard
    router.get('/dashboard', authMiddleware, checkRole('admin'), (req, res) => {
        res.status(200).json({msg: 'Welcome Dashboard Page', user: req.user});
    });

module.exports = router;