"use strict";
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
exports.loginUserAccount = exports.createUserAccount = exports.getAllUsers = exports.sendMail = exports.getAllUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const email_1 = require("../utils/email");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        return res.status(200).json({
            message: "All users found",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error gettting users",
            status: 404,
        });
    }
});
exports.getAllUser = getAllUser;
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        yield (0, email_1.verifiedEmail)().then(() => {
            console.log("mail sent...");
        });
        return res.status(200).json({
            message: "All users found",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error gettting users",
            status: 404,
        });
    }
});
exports.sendMail = sendMail;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        return res.status(200).json({
            message: "All users found",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error gettting users",
            status: 404,
        });
    }
});
exports.getAllUsers = getAllUsers;
const createUserAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, avatar } = req.body;
        const users = yield userModel_1.default.create({ name, email, password, avatar });
        return res.status(201).json({
            message: "user account created successfully",
            data: users,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating user account",
            status: 404,
        });
    }
});
exports.createUserAccount = createUserAccount;
const loginUserAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const users = yield userModel_1.default.findOne({ email });
        if (users) {
            if (password === users.password) {
                return res.status(201).json({
                    message: "user login",
                    data: users,
                    status: 201,
                });
            }
            else {
                return res.status(404).json({
                    message: "password is incorrect",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "Email not found",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating user account",
            status: 404,
        });
    }
});
exports.loginUserAccount = loginUserAccount;
