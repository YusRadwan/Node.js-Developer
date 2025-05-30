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
const express_validator_1 = require("express-validator");
// Get Signup
let getSignup = (req, res) => {
    res.render('../views/pages/signup.ejs', { errors: false });
};
exports.getSignup = getSignup;
// Get Login
let getLogin = (req, res) => {
    res.render('../views/pages/login.ejs', { errors: false });
};
exports.getLogin = getLogin;
// Create Account
exports.signupUsers = (0, async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = (0, express_validator_1.validationResult)(req);
        if (result.isEmpty()) {
            let users = yield UserDB_1.default.findOne({ email: req.body.email });
            if (users) {
                console.log(`${users.email} Account Is exists`);
                res.redirect('/signup');
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
        else {
            console.log(`Errors in fields when try Signup`);
            res.render('../views/pages/signup.ejs', { errors: result.array() });
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
        let result = (0, express_validator_1.validationResult)(req);
        if (result.isEmpty()) {
            const emailUser = yield UserDB_1.default.findOne({ email: req.body.email });
            // Check If User True
            if (emailUser) {
                const passwordUser = yield bcrypt.compare(req.body.password, emailUser.password);
                // Check if Password Same in Database
                if (passwordUser) {
                    console.log(`Welcome ${emailUser} in Website`);
                    res.redirect('/home');
                }
                else {
                    console.log('Error in Password When Login please try again');
                    res.status(404).redirect('/login');
                }
            }
            else {
                console.log('Error in Email When Login please try again');
                let errormsg = `This Email (${req.body.email}) not Found`;
                res.status(404).send(errormsg);
            }
        }
        else {
            console.log(`Errors in fields when try Login`);
            res.render('../views/pages/login.ejs', { errors: result.array() });
        }
    }
    catch (err) {
        console.log(err);
        res.send(`Error in Logging User Controller`);
    }
}));
