const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRole');

// Register New User
    router.post('/register', userController.registerUser);

// Login user
    router.post('/login', userController.loginUser);

// All
    router.get('/all', authMiddleware, checkRole('admin'), userController.getAllUser);

// Profile
    router.get('/profile', authMiddleware, checkRole('user'), userController.getProfile);

// Delete
    router.delete('/:id', authMiddleware, checkRole('admin'), userController.deleteUser);


module.exports = router;