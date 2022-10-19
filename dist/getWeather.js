"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const got_1 = __importDefault(require("got"));
const apiKey_1 = __importDefault(require("./apiKey"));
const getWeather = (city, callBack) => {
    return (0, got_1.default)(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey_1.default}`)
        .then((response) => {
        const json = JSON.parse(response.body);
        return callBack(json);
    });
};
exports.getWeather = getWeather;
const printWeather = (weather) => {
    console.log(weather);
};
(0, exports.getWeather)('Southampton', printWeather);
