// 1) Import Mongoose
    const mongoose = require("mongoose");

// 3) Create Schema
    const studentSchema = new mongoose.Schema({
        fn: {
            type: String,
            require: true,
            minlength: 3,
            maxlenght: 50,
            trim: true
        },
        ln: String,
        dept: {
            type: String,
            required: true,
            // enum: ["SD", "SA", "MD"],
            validate: {validator: function(v) {
                return /^[SM][AD]$/.test(v);
            }},
            minlength: 2,
            maxlenght: 6,
            match: /^[SM][AD]$/
        },
        id: {
            type: Number,
            unique: true,
            required: true,
            min: 1,
            max: 20
        }
    });

// 4) Create Model
    const Student = mongoose.model("Students", studentSchema);


module.exports = Student;