// Imports
    const express = require("express");
    const router = express.Router();
    const StudentsController = require("../controllers/StudentsController");
    const validNumber = require("../middlewares/valid-Number");



// Middleware
    //Custom Middleware
        // Parameter Middleware
            router.param('id', validNumber);


// Request
    // Get Request All Students
        router.get("/", StudentsController.getAllStudents);

    // Get Request a students By url Parameter
        router.get('/:id', StudentsController.getStudentsByUrl);


// Handling
    // Handling Http Post Request
        router.post("/", StudentsController.addStudent);

    // Handling Http Delete Request
        router.delete("/:id", StudentsController.deleteStudent);

    // Handling Http PUT Request
        router.put("/:id", StudentsController.updateStudents);


// Exports Router
    module.exports = router;