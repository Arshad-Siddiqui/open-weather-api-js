import got from 'got';
import apiKey from './apiKey';

export const getWeather = (city: string, callBack: Function) => {
  return got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response: {body: string}) => {
      const json: JSON = JSON.parse(response.body)
      return callBack(json)
  })
}

const printWeather = (weather: any) => {
  console.log(weather)
}

getWeather('Southampton', printWeather)