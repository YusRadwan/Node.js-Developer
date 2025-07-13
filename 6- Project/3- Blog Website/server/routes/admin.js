const express = require('express');
const router = express.Router();
const controler = require('../controlers/admin.contr');
const authAdminMiddl = require('../middleware/authAdminMidd');


// Login 
    // Get admin Page
        router.get('/admin', controler.getloginAdmin);

    // Post Login by admin
        router.post('/admin', controler.loginAdmin);

// Register
    // Get register Page
        router.get('/admin/register', authAdminMiddl, controler.getRegister);

    // Create Admin
        router.post('/register', authAdminMiddl, controler.createAdmin);

// Dashboard
    // get Dashboard
        router.get('/admin/dashboard', authAdminMiddl, controler.getdashboard);


module.exports = router;