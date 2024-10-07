"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
    },
    verify: {
        type: Boolean,
    },
    verifyToken: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userModel);
