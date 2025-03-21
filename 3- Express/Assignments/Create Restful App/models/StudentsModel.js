// Imports
    const { compileSchema } = require("ajv/dist/compile");
const fs = require("fs");
    const path = require("path");
    const studentsPath = path.join(path.dirname(process.mainModule.filename), "data", "Students.json");


module.exports = class Student {
    constructor ({name:nm, dept}) {
        this.name = nm;
        this.dept = dept;
    }

    saveStudent () {
        // Read From File
            fs.readFile(studentsPath, (err, info) => {
                let Students = [];
                if(!err) {
                    Students = JSON.parse(info);

                    // Update Data
                        this.id = Students.length + 1;
                        Students.push(this);
                    
                    // Write into file
                        fs.writeFile(studentsPath, JSON.stringify(Students), (err) => {
                                console.log("Error in Write Data For Students ...!!")
                            });
                }
            });
    }

    static fetchAllStudents (callback) {
        // return Students;
        fs.readFile(studentsPath, (err, info) => {
            if(!err) {
                callback(JSON.parse(info));
            } else {
                callback([]);
            }
        });
    }
}