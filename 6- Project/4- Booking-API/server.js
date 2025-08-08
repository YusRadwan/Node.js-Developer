// Import 
    const express = require("express");
    const dotenv = require("dotenv").config();
    
    const startServer = require("./config/start.server");

// Start App
    const app = express();

// Meddilware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


// Route
    app.use('/api/users', require('./server/routes/userRoutes'));
    app.use('/api/admin', require('./server/routes/adminRoutes'));

// Run Server
    startServer(app);