// Import Library
    const express = require('express');
    const router = express.Router();

// Import Files
    const eventContrllers = require('../controllers/event.contr');
    const {validEvent} = require('../valid/valid.event');

// Home //
    // Get All Event
        router.get('/', eventContrllers.getAllEvent);

    // Get Event By ID
        router.get('/event/show/:id', eventContrllers.getEventById);

// Add New Event //
    // Get Page Add Event
        router.get('/event/create', eventContrllers.getAddEvent);

    // Add New Event
        router.post('/event/create', validEvent, eventContrllers.addEvent);

// Edit Event //
    // get Page edit
        router.get('/event/edit/:id', eventContrllers.getEdit);

    // Update Event
        router.post('/event/update', validEvent, eventContrllers.updateEvent)

// Delete Event
    router.all('/event/delete/:id', eventContrllers.deleteEvent);

// Errors //
    router.get('/event/errorMsg', eventContrllers.getErrors);

// Export
    module.exports = router;