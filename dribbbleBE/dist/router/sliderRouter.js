"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sliderController_1 = require("../controller/sliderController");
const router = (0, express_1.Router)();
router.route("/view-slider").get(sliderController_1.viewAllSlider);
router.route("/create-slider").post(sliderController_1.createSlider);
exports.default = router;
