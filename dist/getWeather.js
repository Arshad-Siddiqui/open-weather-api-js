"use strict";
const got = require('got');
const apiKey = require('./apiKey');
const getWeather = (city, callBack) => {
    return got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response) => {
        const json = JSON.parse(response.body);
        return callBack(json);
    });
};
const printWeather = (weather) => {
    console.log(weather);
};
getWeather('Southampton', printWeather);
