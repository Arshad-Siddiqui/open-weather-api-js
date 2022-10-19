"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
