"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
// Import Files
const Home_routes_1 = __importDefault(require("./routes/Home.routes"));
const Product_routes_1 = __importDefault(require("./routes/Product.routes"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const location_1 = __importDefault(require("./middleware/location"));
// use Express
const app = (0, express_1.default)();
// Middlewares
// body-parser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Read Path
app.use(express_1.default.static('images')); // Files From Folder
app.use('/assets', express_1.default.static('assets')); // From Folders
// 
(req, res, next) => {
    console.log(req.path);
    next();
};
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
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const STORE = new MongoDBStore({
    uri: "mongodb://localhost:27017/online-shop",
    collection: "sessions"
});
// Routes
app.use('/', Home_routes_1.default, User_routes_1.default);
app.use('/home', location_1.default, Home_routes_1.default);
app.use('/product', Product_routes_1.default);
// Use Session
app.use((0, express_session_1.default)({
    secret: "This is a secret",
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 Day
    },
    store: STORE
}));
// Server Listen
const PORT = 3000;
app.listen(PORT, (err) => {
    console.log(err);
    console.log(`App Is Listen On Port ${PORT}`);
});
