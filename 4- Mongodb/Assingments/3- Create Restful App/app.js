// Imports
    // Modules
        const path = require('path');
        const express = require('express');
        const mongoose = require("mongoose");
        const cookieParser = require("cookie-parser");
        const ejs = require('ejs');
        const helmet = require('helmet');
    // Router
        const studentsRouter = require("./routes/Students");
        const usersRouter = require("./routes/Users");
        const authRouter = require("./routes/auth");
        const adminRouter = require("./routes/admin");
        // Middlewares
        const logging = require("./middlewares/Logging");
        const errMW = require("./middlewares/errorMW");

// Handling Synchronous Exceptions
    process.on("uncaughtException", (exception) => {console.log("uncaught Exception")});
    process.on("unhandledRejection", (exception) => {console.log("Promise Rejection")});

// Call Express Function
    const app = express();

// Set host environment variables
    const port = process.env.PORT || 3000;

// Step 2) from (StudentModelDB.js) Connected With MDB
    mongoose.connect("mongodb://127.0.0.1:27017/Library", {
        'useCreateIndex': true,
        "useNewUrlParser": true,
        "useUnifiedTopology": true,
        "useFindAndModify": false
    }).then(() => {
        console.log("Database Connected ...!!!");
    }).catch((err) => {
        console.log(err);
    });

// Middlewares
    // 1- Built-in Middleware
        // When Client Send Request Data By Json, Server Needs to Parse (Middleware) to understand this Data 
            app.use(express.json());

        // Needs To Parser Middleware to Show Body object
            app.use(express.urlencoded({extended: true}));

        // Static Files(css, html, js, ....)
            app.use(express.static("public"));

    // 2- Third-Party Middleware
        // Parsing to Cookie Parser
            app.use(cookieParser('mysecretkey'));
        
        // Help secure Express apps by setting HTTP response headers
        // Secure From XSS or Clickjacking
            app.use(helmet());

    // 3- Custom Middleware 
        // Application-level
            app.use(logging);

    // 4- Route Handler Middleware For Any Get Request (app.all(All HTTP Request => get, post, ...))
        app.get("*", (req, res, next) => {
            console.log("Get All Request Middleware Recieved ...!!!");
            next();
        });


// App Setting
    // Define ejs
        app.set('template engine', 'ejs');
    // Change Folder name 
        app.set('views', 'templates');

// Request
    // Get Request main page
        app.get('/', (req, res) => {
            console.log("Request for / Recieved ...!!!!!!!!");
            res.sendFile(path.join(__dirname,"/main.html"));
        });

    // Get Request Welcome Page By Query String
        app.get('/welcome.html', (req, res) => {
            // Set
                const fnm = req.query.fnm;
                const lnm = req.query.lnm;
            // Send
                res.sendFile(path.join(__dirname,"/welcome.html"));
                res.send(`<h1>Welcome to Site ${fnm} ${lnm}</h1>`);
        });

    // Send Request Welcome Page from body
        app.post('/welcome.html', (req, res) => {
            console.log(req.body);
            
            //Creating and Encode Cookie 
                // Option => {expires: , maxAge: duration, httpOnly: Boolean}
                res.cookie("usernm", Buffer.from(req.body.fnm).toString("base64"));
                res.cookie("userage", 25, {httpOnly: true});
            //any domain Accepted to Req
                res.set("Access-Control-Allow-Origin", "*");
            //Send
                res.send(`Welcome to Page ${req.body.fnm} ${req.body.lnm} --- 
                    Cookies is: User: ${req.cookies.usernm}, Age: ${req.cookies.userage}`);
        });

    // Students
        app.use("/api/students/", studentsRouter);

    // Users
        app.use("/api/users/", usersRouter);

    // Authantication
        app.use("/api/login/", authRouter);
    
    // Update User To Admin 
        app.use("/api/admin/", adminRouter);

    // Error Handler
        app.use(errMW);



// Server Listening
    app.listen(port, () => console.log(`listening on Port: ${port} ...!!!`));

