// Import Library
    const express = require('express');

// Import Files
    const Event = require('../models/eventDB');
    const {validationResult} = require('express-validator');

// Get All Event
    let getAllEvent = async (req, res) => {
        let events = await Event.find({});
        res.render('event/index', {events: events});
    };

// Get Page Add Event
    let getAddEvent = (req, res) => {
        res.render('event/create', {errors: false});
    };

// Add Event
    let addEvent = (req, res) => {
        const result = validationResult(req);
        let err = result.array()

        if(result.isEmpty()) {
            let newEvent = new Event ({
                title: req.body.title,
                desc: req.body.description,
                location: req.body.location,
                date: req.body.date,
                created_at: Date.now()
            });
            
            newEvent.save();
            res.redirect('/');
        } else {
            console.log(err);
            res.render('event/create', {errors: err});
        }

    };

// get Event By Id
    let getEventById = async (req, res) => {
        try {
            const event = await Event.findById({_id: req.params.id});
            res.render('event/show', {event: event});
        }catch(err) {
            console.log(err);
        }


    }

module.exports = {
    getAllEvent,
    getAddEvent,
    addEvent,
    getEventById
}