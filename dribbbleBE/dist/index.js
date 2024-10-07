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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sliderRouter_1 = __importDefault(require("./router/sliderRouter"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const dbConfig_1 = require("./utils/dbConfig");
const email_1 = require("./utils/email");
const app = (0, express_1.default)();
const PORT = 2211;
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express_1.default.json());
app.use("/api", userRouter_1.default);
app.use("/api", sliderRouter_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, email_1.verifiedEmail)().then(() => {
            console.log("mail sent...");
        });
        res.status(200).json({
            message: "Hello from Dribble API and sent Email!",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error" });
    }
}));
app.listen(PORT, () => {
    (0, dbConfig_1.dbConfig)();
});
