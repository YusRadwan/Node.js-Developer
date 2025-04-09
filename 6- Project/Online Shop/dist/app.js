"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
// Import Files
const Home_routes_1 = __importDefault(require("./routes/Home.routes"));
// import Product from "./models/ProductDB";
// use Express
const app = (0, express_1.default)();
// Middlewares
// body-parser
app.use(express_1.default.json());
// Read Path
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'images')));
// EJs
app.set('view engine', 'ejs');
app.set('views', 'views');
// Connection With DB
mongoose_1.default.connect("mongodb://127.0.0.1:27017/online-shop")
    .then(() => {
    console.log("Database Connected ...!!!");
}).catch((err) => {
    console.log(err);
});
// Routes
app.use('/', Home_routes_1.default);
// Server Listen
const PORT = 3000;
app.listen(PORT, (err) => {
    console.log(err);
    console.log(`App Is Listen On Port ${PORT}`);
});
