// Import Library
    const express = require('express');
    const router = express.Router();

// Import Files
    const eventContrllers = require('../controllers/event.contr');
    const {validEvent} = require('../valid/valid.event');
    const isAuthentication = require('../middleware/isAuth.midd');


// Home //
    // Get All Event
        router.get('/', eventContrllers.getAllEvent);
        router.get('/events/:pageNo', eventContrllers.getAllEvent);

    // Get Event By ID
        router.get('/event/show/:id', eventContrllers.getEventById);

// Add New Event //
    // Get Page Add Event
        router.get('/event/create', isAuthentication, eventContrllers.getAddEvent);

    // Add New Event
        router.post('/event/create', isAuthentication, validEvent, eventContrllers.addEvent);

// Edit Event //
    // get Page edit
        router.get('/event/edit/:id', isAuthentication, eventContrllers.getEdit);

    // Update Event
        router.post('/event/update', isAuthentication, validEvent, eventContrllers.updateEvent)

// Delete Event
    router.all('/event/delete/:id', isAuthentication, eventContrllers.deleteEvent);

// Errors //
    router.get('/event/errorMsg', eventContrllers.getErrors);

// Export
    module.exports = router;