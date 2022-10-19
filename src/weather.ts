import WeatherApi from "./weatherApi";

class Weather {
  api: {fetchWeatherData: Function}
  weatherData: {}
  constructor(api: {fetchWeatherData: Function}) {
    this.api = api;
    this.weatherData = {}
  }

  fetch(city: string) {
    this.weatherData = this.api.fetchWeatherData(city, (response: any) => {
      console.log(response)
      return response
    })
  }

  getWeatherData() {
    return this.weatherData;
  }
}

export default Weather;
