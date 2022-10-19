const got = require('got')
const apiKey: string = require('./apiKey')

const getWeather = () => {
  return got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`)
    .then((response: {body: string}) => {
      console.log(JSON.parse(response.body))
      return JSON.parse(response.body)
  })
}

getWeather()