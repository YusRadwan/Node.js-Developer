// Import Modules
const modCall = require("./script.js")
const os = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");
const eventEmitter = require("events");
const http = require("http");

var eventObj = new eventEmitter();


// Code
console.log("Hello Node **** Start App");

console.log("***************** Import");
let x = 10;
    y = 20;

function add(a, b) {
    return a + b;
}

const resultAdd = add(x, y);
const resultSub = modCall.subFun(x, y);

console.log(resultAdd);
console.log(resultSub);



// console.log(window);

// console.log(global.x); //undefined


// OS Module
console.log("*****************");
process.stdout.write("OS Modules OutPut: ");
console.log(`Arch --> ${os.arch()}`);


// Path Module
console.log("*****************");
process.stdout.write("Path Modules OutPut: ");
console.log(path.parse(__filename));

// File System Module
console.log("*****************");
var readData = fs.readFile('./msg.text', 'utf-8', (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info); 
    }
});

// Event Modules
console.log("*****************");

/// Register
function fun() {console.log("Lookup Event: #1")};

eventObj.on("lookup", fun);
eventObj.on("lookup", () => {console.log("Lookup Event: #2")});
eventObj.once("lookup", () => {console.log("Lookup Event: #3")});


/// Fire
eventObj.emit("lookup");
console.log("---------");

eventObj.off("lookup", fun);
eventObj.emit("lookup");

// HTTP Modules
console.log(" Server *****************");

const server = http.createServer((req, res) => {
    //Request
    console.log(req.url);
    console.log("Test Automatic Server Load");
    

    //Response
    /// Handler Request
    if (req.url == '/') {
        res.end(`<h1>Hello Visitor</h1>`);
    } else if(req.url == "/home"){
        fs.readFile("home.html", (err, data) => {
            if (err) {
                console.log("err");
            } else {
                res.write(data.toString());
                res.end();
            }
        });
    } else if (req.url == '/style.css') {
        fs.readFile('style.css', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                res.writeHead(200, {"content-type" : "text/css"});
                res.write(data.toString());
                res.end();
            }
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
// server.on("request", (req, res) => {
//     console.log(req.url);
    
//     res.write("Welcome Home Page: ");
//     res.end();
// });
server.listen(3000, () => {console.log("Server Listening on Port 3000 .....!!!")});