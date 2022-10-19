"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const apiKey_1 = __importDefault(require("./apiKey"));
class WeatherApi {
    fetchWeatherData(city, callBack) {
        (0, got_1.default)(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey_1.default}`).then((response) => {
            const weather = JSON.parse(response.body);
            callBack(weather);
        });
    }
}
const api = new WeatherApi;
api.fetchWeatherData('Southampton', (weather) => {
    console.log(weather.main.temp);
});
exports.default = WeatherApi;
