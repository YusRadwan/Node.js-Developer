// Import Library
    const express = require('express');
    const moment = require('moment');
    moment().format();

// Import Files
    const Event = require('../models/eventDB');
    const {validationResult} = require('express-validator');

// Home Page //
    // Get All Event
        let getAllEvent = async (req, res) => {
            let pageNo = 1;

            if (req.params.pageNo) {
                pageNo = parseInt(req.params.pageNo)
            }

            if (req.params.pageNo == 0) {
                pageNo = 1;
            }

            let q = {
                skip: 5 * (pageNo - 1),
                limit: 5
            }

            // Find Total Documents
                let totalDoc = 0;
                const totalEvent = await Event.countDocuments({});
                // Check If Not Found
                    if(totalEvent){
                        totalDoc = parseInt(totalEvent);
                        let events = await Event.find({}).skip(q.skip).limit(q.limit);
                        if (events) {
                            res.render('event/index', {
                                events: events,
                                msg: req.flash('msg'),
                                total: parseInt(totalDoc),
                                pageNo: pageNo
                            });
                        } else {
                            console.log('Error => Event not found')
                        }
                    } else {
                        console.log('error in Count Events');
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

// Add Event //
    // Get Page Add Event
        let getAddEvent = (req, res) => {
            res.render('event/create', {errors: req.flash('errors')});
        };

    // Add Event
        let addEvent = (req, res) => {
            const result = validationResult(req);
            const {title, description, location, date} = req.body
            if(result.isEmpty()) {
                let newEvent = new Event ({
                    title: title,
                    desc: description,
                    location: location,
                    user_id: req.user.id,
                    date: date,
                    created_at: Date.now()
                });
                
                newEvent.save();
                req.flash('msg', `Add New Event { ${title} } Succesfuly`);
                res.redirect('/');
            } else {
                console.log(result.array());
                req.flash('errors', result.array());
                res.redirect('/event/create');
            }

        };

// Edit Event //
    // Get Page edit
        let getEdit = async (req, res) => {
            try {
                const event = await Event.findOne({_id: req.params.id});
                res.render('event/edit', {
                    events: event,
                    eventDate: moment(event.date).format('YYYY-MM-DD'),
                    errors: req.flash('errors'),
                    msg: req.flash('msg')
                });
            }catch(err) {
                console.log(err);
            }
        }

    // Update Event
        let updateEvent = (req, res) => {
            const resultErr = validationResult(req);
            const {id, title, description, location, date} = req.body;
            try {
                if(!resultErr.isEmpty()) {
                    req.flash('errors', resultErr.array());
                    res.redirect('edit/' + id);
                } else {
                    Event.updateOne({_id: id}, {
                        title: title,
                        desc: description,
                        location: location,
                        date: date
                    }).exec();
                    req.flash('msg', `The Event is Update Successfuly`);
                    res.redirect('edit/' + id);
                }
            } catch (err) {
                console.log(err);
                req.flash('errorUpdate', `Error happen When try Update Event, Please Try Again`);
                res.render('event/errorMsg', {errorMsg: req.flash('errorUpdate')});
            }
        }

// Delete Event //
    // Delete
        let deleteEvent = async (req, res) => {
            let events = await Event.find({});
            Event.deleteOne({_id: req.params.id}).exec();
            req.flash('msg', `Event is Deleted`)
            res.render('event/index', {
                msg: req.flash('msg'),
                events: events
            });
        }

// Errors Handle //
    // get Error
        let getErrors = (req, res) => {
            res.render('event/errorMsg', {errorMsg: 'Not Found Errors'});
        };

module.exports = {
    getAllEvent,
    getAddEvent,
    addEvent,
    getEventById,
    getEdit,
    updateEvent,
    deleteEvent,
    getErrors
}