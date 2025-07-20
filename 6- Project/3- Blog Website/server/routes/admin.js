const express = require('express');
const router = express.Router();
const controler = require('../controlers/admin.contr');
const authAdminMiddl = require('../middleware/authAdminMidd');
const { render } = require('ejs');


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

// Add post
    // get Add post
        router.get('/admin/add-post', authAdminMiddl, controler.addPost);

    // Post Add Post
        router.post('/add-post', authAdminMiddl, controler.addNewPost);

// Edit Post
    // Get Edit Page
        router.get('/admin/edit-post/:id', authAdminMiddl, controler.editPost);

    // Update Post
        router.put('/admin/edit-post/:id', authAdminMiddl, controler.updatePost);

    // Delete Post
        router.delete('/admin/delete-post/:id', authAdminMiddl, controler.deletePost);

    // LogOut
        router.get('/admin/logout', authAdminMiddl, controler.logOutAdmin);

module.exports = router;