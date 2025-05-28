// Import Library
    const express = require('express');
    const router = express.Router();

// Import Files
    const eventContrllers = require('../controllers/event.contr');
    const {validEvent} = require('../valid/valid.event');

// Get All Event
    router.get('/', eventContrllers.getAllEvent);

// Get Page Add Event
    router.get('/event/create', eventContrllers.getAddEvent);

// Add New Event
    router.post('/event/create', validEvent, eventContrllers.addEvent);


// Export
    module.exports = router;