// Imports
    // Modules
        const express = require("express");
        const router = express.Router();
    // Controllers
        const StudentsController = require("../controllers/StudentControllerDB");
    // MW
        const validNumber = require("../middlewares/valid-Number");
        const Studentvalid = require("../middlewares/StudentValidMiddelware");
        const auth = require("../middlewares/AuthMWPermission");



// Middleware
    //Custom Middleware
        // Parameter Middleware
            router.param('id', validNumber);


// Request
    // Get Request All Students
        router.get("/", StudentsController.getAllStudents);

    // Get Request a students By url Parameter
        router.get('/:id', StudentsController.getStudentById);


// Handling
    // Handling Http Post Request
        router.post("/", Studentvalid, auth, StudentsController.addNewStudent);

    // Handling Http Delete Request
        router.delete("/:id", auth, StudentsController.deleteStudentById);

    // Handling Http PUT Request
        router.put("/:id", StudentsController.updateStudent);


// Exports Router
    module.exports = router;