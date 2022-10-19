"use strict";
const got = require('got');
const apiKey = require('./apiKey');
const getWeather = () => {
    return got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`)
        .then((response) => {
        console.log(JSON.parse(response.body));
        return JSON.parse(response.body);
    });
};
getWeather();
