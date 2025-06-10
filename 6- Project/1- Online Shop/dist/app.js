"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const dotenv_1 = __importDefault(require("dotenv"));
// Import Files
const Home_routes_1 = __importDefault(require("./routes/Home.routes"));
const Product_routes_1 = __importDefault(require("./routes/Product.routes"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const Carts_routes_1 = __importDefault(require("./routes/Carts.routes"));
const admin_router_1 = __importDefault(require("./routes/admin.router"));
// use Express
const app = (0, express_1.default)();
dotenv_1.default.config();
// Middlewares
// body-parser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Read Path
app.use(express_1.default.static('images')); // Files From Folder
app.use('/assets', express_1.default.static('assets')); // From Folders
// Use Session
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false, // Don't save session if not find change
    saveUninitialized: false, // save new session even if empty 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 Day
    },
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: "sessions"
    })
}));
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
app.use('/', Home_routes_1.default, User_routes_1.default, Carts_routes_1.default, admin_router_1.default);
app.use('/product', Product_routes_1.default);
// Server Listen
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
    console.log(err);
    console.log(`App Is Listen On Port ${port}`);
});
