"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sliderModel = new mongoose_1.Schema({
    video: {
        type: String,
    },
    image: {
        type: String,
    },
    profession: {
        type: String,
    },
    skills: {
        type: [],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("sliders", sliderModel);
