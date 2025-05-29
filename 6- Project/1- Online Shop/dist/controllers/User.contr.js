"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingUsers = exports.signupUsers = exports.getLogin = exports.getSignup = void 0;
const UserDB_1 = __importDefault(require("./../models/UserDB"));
const async_1 = __importDefault(require("../middleware/async"));
const bcrypt = __importStar(require("bcrypt"));
// Get Signup
let getSignup = (req, res) => {
    res.render('../views/pages/signup.ejs');
};
exports.getSignup = getSignup;
// Get Login
let getLogin = (req, res) => {
    res.render('../views/pages/login.ejs');
};
exports.getLogin = getLogin;
// Create Account
exports.signupUsers = (0, async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield UserDB_1.default.findOne({ email: req.body.email });
        if (users) {
            res.status(404).send('Account is Exists, Please back and Login');
            console.log(`${users.email} Account Is exists`);
        }
        else {
            let hashPass = yield bcrypt.hash(req.body.password, 10);
            let user = new UserDB_1.default({
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
            });
            user.save();
            res.redirect('/login');
        }
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Signup User Controller`);
    }
}));
// Loggin Account
exports.loggingUsers = (0, async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailUser = yield UserDB_1.default.findOne({ email: req.body.email });
        if (emailUser) {
            const passwordUser = yield bcrypt.compare(req.body.password, emailUser.password);
            console.log(`Password is Exists: ${passwordUser}`);
            console.log(`Welcome ${emailUser} in Website`);
            res.redirect('/home');
        }
        else {
            console.log('Error in Password Or Email When try Login');
            res.status(404).redirect('/login');
        }
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Logging User Controller`);
    }
}));
