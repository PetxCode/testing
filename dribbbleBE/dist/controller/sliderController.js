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
exports.createSlider = exports.viewAllSlider = void 0;
const sliderModel_1 = __importDefault(require("../model/sliderModel"));
const viewAllSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const slider = yield sliderModel_1.default.find();
        return res.status(200).json({
            message: "All slider found",
            data: slider,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error gettting slider",
            status: 404,
        });
    }
});
exports.viewAllSlider = viewAllSlider;
const createSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { video, image, profession, skills } = req.body;
        const slider = yield sliderModel_1.default.create({
            video,
            image,
            profession,
            skills,
        });
        return res.status(201).json({
            message: "slider created successfully",
            data: slider,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating slider",
            status: 404,
        });
    }
});
exports.createSlider = createSlider;
