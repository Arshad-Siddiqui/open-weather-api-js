"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weatherApi_1 = __importDefault(require("./weatherApi"));
class Weather {
    constructor(api) {
        this.api = api;
        this.weatherData = {};
    }
    fetch(city) {
        this.weatherData = this.api.fetchWeatherData(city, (response) => {
            console.log(response);
            return response;
        });
    }
    getWeatherData() {
        return this.weatherData;
    }
}
exports.default = Weather;
const api = new weatherApi_1.default;
const weather = new Weather(api);
weather.fetch('Southampton');
console.log(weather.getWeatherData);
