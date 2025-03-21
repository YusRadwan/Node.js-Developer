// 1) Import Mongoose
    const mongoose = require("mongoose"); // schemas ويتعامل مع ال CRUD operations بيعمل الـ 

// 2) Connected With MDB
    mongoose.connect("mongodb://127.0.0.1:27017/Library").then(() => {
        console.log("Database Connected ...!!!");
    }).catch((err) => {
        console.log(err);
    });

// 3) Create Schema تحدد هيكل البيانات (مثل الحقول المطلوبة أو أنواع البيانات)
    const studentSchema = new mongoose.Schema({
        fn: String,
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

// 4) Create Model بتستخدمه للتعامل مع البيانات (إضافة، قراءة، تحديث، حذف)
    const Student = mongoose.model("Students", studentSchema); // (Name Collection, name Schema);

// CRUD Operation
    // Way 1
        Student.findById("67d51aa165b8a2de3076ad2d").then((data) => {console.log(`Find By ID: ${data}`)});

    //Way 2
        Student.find({fn: /^A/}).where("ln").equals("MO").then(console.log);

    // Way 3
        async function getAllStudents() {
            let result = await Student.find(/*id : {$gte: 2, $lte: 4}*/).and([
                {id: {$gte: 2}},
                {id: {$lte: 4}}
            ]).limit(2).sort({
                id: -1
            }).select({
                fn: 1,
                ln: 1,
                id: 1
            });

            // Print in Console
            console.log(`Get name 2 Students and sort Asen use Function Async: ${result}`);
        }

    // Call Async Function
        getAllStudents();


    // Function Add New Student
        function addNewStudent(fn, ln, dept, id) {
            let std = new Student({
                fn: fn,
                ln, ln,
                dept: dept,
                id: id
            });

            std.save().then(() => {
                console.log("Student is Saved ...!!!")
            }).catch((err) => {
                for (let e in err.errors){
                    console.log(err.errors[e].message);
                }
            });
        };

        addNewStudent("Sara", "Samir", "DE", 8);