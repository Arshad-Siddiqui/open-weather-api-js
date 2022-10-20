"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = __importDefault(require("../weather"));
describe('Weather', () => {
    it('takes JSON data from api and returns it as a JS object', () => {
        const fakeApi = {
            fetchWeatherData(city, callBack) {
                return 'Cloudy with a chance of meatballs.';
            }
        };
        const weather = new weather_1.default(fakeApi);
        weather.fetch('Test-city');
        expect(weather.getWeatherData()).toEqual('Cloudy with a chance of meatballs.');
    });
});
