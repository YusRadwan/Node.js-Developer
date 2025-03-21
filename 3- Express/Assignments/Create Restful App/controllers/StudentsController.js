// Imports
    const validator = require("../util/StudentsValid");
    const Student = require("../models/StudentsModel");

// Request
    // Get Request All Students
        const getAllStudents = (req, res) => {
                // res.json(Students);
                // Template Engine
                    Student.fetchAllStudents((obj) => {
                        res.render('students.ejs', {std: obj});
                    });
            }

    // Get Request a students By url Parameter
        const getStudentsByUrl = (req, res) => {
                // let id = req.params.id;
                let id = req.id; // From Param Middleware
                const std = Students.find((val) => {return val.id == id});
                if(std) {
                    res.json(std);
                }else{
                    res.send(`Student by ID: ${req.id} is Not Found in DB ...!!!`);
                }
            }

// Handling
    // Handling Http Post Request
        const addStudent = (req, res) => {
            // Check Validator JSON Schema
                let valid = validator(req.body);
                if(valid) {
                    // req.body.id = Students.length + 1;
                    // Students.push(req.body);
                    let std = new Student(req.body);
                    std.saveStudent();
                    res.json(req.body);
                } else {
                    res.status(403).send("Student Data Not Valid ....!!!")
                }
            }

    // Handling Http Delete Request
        const deleteStudent = (req, res) => {
                let idx = Students.findIndex((val) => {return val.id == req.params.id});
                if(idx != -1){
                    Students.splice(idx, 1);
                    res.send("One Element Affected");
                }else {
                    res.send("Student Not Found");
                }
            }

    // Handling Http PUT Request
        const updateStudents = (req, res) => {
                let idx = Students.findIndex((val) => {return val.id == req.body.id});
                // Check idx
                if(idx != -1) {
                    for(i in req.body){
                        Students[idx][i] = req.body[1];
                    }
                    res.json(Students[idx]);
                } else {
                    res.send("Student Not Found ... Update is Not Allowed..!!");
                }
            }

module.exports = {getAllStudents, getStudentsByUrl, addStudent, deleteStudent, updateStudents}