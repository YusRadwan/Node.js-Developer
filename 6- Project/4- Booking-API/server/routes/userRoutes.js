const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authjwtMiddleware = require('../middleware/authjwt');
const checkRole = require('../middleware/checkRole');

// Register New User
    router.post('/register', userController.registerUser);

// Login user
    router.post('/login', userController.loginUser);

// All
    router.get('/all', authjwtMiddleware, checkRole('admin'), userController.getAllUser);

// Profile
    router.get('/profile', authjwtMiddleware, checkRole('user'), userController.getProfile);

// Update
    router.put('/:id', authjwtMiddleware, checkRole('admin'), userController.updateUser);

// Delete
    router.delete('/:id', authjwtMiddleware, checkRole('admin'), userController.deleteUser);


module.exports = router;