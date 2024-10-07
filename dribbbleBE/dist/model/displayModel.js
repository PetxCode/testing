"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const displayModel = new mongoose_1.Schema({
    video: {
        type: String,
    },
    image: {
        type: String,
    },
    country: {
        type: String,
    },
    title: {
        type: String,
    },
    like: {
        type: Number,
    },
    view: {
        type: Number,
    },
    recentWord: {
        type: [],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("displays", displayModel);
