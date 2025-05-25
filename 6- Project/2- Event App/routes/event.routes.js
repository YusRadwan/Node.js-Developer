// Import Library
    const express = require('express');
    const router = express.Router();

// Import Files
    const Event = require('../models/eventDB');
    const eventContrllers = require('../controllers/event.contr');

// Get All Event
    router.get('/', eventContrllers.getAllEvent);

// Get Page Add Event
    router.get('/event/create', eventContrllers.getAddEvent);

// Add New Event
    router.post('/event/create', eventContrllers.addEvent);



// Export
    module.exports = router;