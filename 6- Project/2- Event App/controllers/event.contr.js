// Import Library
    const express = require('express');

// Import Files
    const Event = require('../models/eventDB');

// Get All Event
    let getAllEvent = async (req, res) => {
        let events = await Event.find({});
        res.render('event/index', {events: events});
    };

// Get Page Add Event
    let getAddEvent = (req, res) => {
        res.render('event/create');
    };

// Add Event
    let addEvent = (req, res) => {
        let event = new Event ({
            title: req.body.title,
            desc: req.body.description,
            location: req.body.location,
            date: req.body.date,
            created_at: Date.now()
        });
        event.save();
        res.redirect('/');
    };

module.exports = {
    getAllEvent,
    getAddEvent,
    addEvent
}