// Import Library
    const mongoose = require('mongoose');

// Create Schema
    const eventSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        created_at: {
            type: Date,
            required: true
        },
    });

// Create Model
    const Event = mongoose.model('event', eventSchema);


// Export collection Event
    module.exports = Event;