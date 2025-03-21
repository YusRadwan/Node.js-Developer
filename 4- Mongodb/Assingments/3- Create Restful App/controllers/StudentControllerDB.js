const Student = require("../models/StudentModelDB");
const asynFunction = require("../middlewares/async");

// Create Student
    let addNewStudent = (req, res, nxt) => {
        let std = new Student({
            fn: req.body.fn,
            ln: req.body.ln,
            dept: req.body.dept,
            id: req.body.id
        });

        std.save().then(() => {
            res.status(200).send(std);
        }).catch((err) => {
            nxt(err);
        })
    }

//Get Student By ID
    let getStudentById = asynFunction(async (req, res) => {
            let std = await Student.findById(req.params.id);
            // Check
                if(!std) return res.status(404).send("Studnet With the Given ID is not Found ...!!!");
            // Response
                res.send(std);
    });

// Get All Students
    let getAllStudents = asynFunction(async (req, res) => {
            let std = await Student.find().select({
                fn: 1,
                ln: 1,
                id: 1
            }).sort({id: 1});

            res.send(std);
    });

// Update Student
    let updateStudent = asynFunction(async (req, res) => {
            let std = await Student.findOneAndUpdate(req.params.id, req.body, {returnOriginal: false});
            
            if(!std) return res.status(404).send("Studnet With the Given ID is not Found ...!!!");
            res.send(std);
    })

// Delete Student
    let deleteStudentById = asynFunction(async (req, res) => {
            let std = await Student.findByIdAndDelete(req.params.id);
            
            if(!std) return res.status(404).send("Studnet With the Given ID is not Found ...!!!");
            res.send(std);
    })


module.exports = {
    addNewStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deleteStudentById
}