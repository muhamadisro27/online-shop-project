"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const logging_1 = require("./app/logging");
const web_1 = require("./app/web");
dotenv_1.default.config();
const port = process.env.APP_PORT || 4000;
web_1.web.listen(port, () => logging_1.logger.info(`Listening on server http://localhost:${port}`));
