import got from "got";
import apiKey from "./apiKey";

class WeatherApi {
  fetchWeatherData(city: string, callBack: Function) {
    got(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    ).then((response: { body: string }) => {
      const weather = JSON.parse(response.body);
      callBack(weather);
    });
  }
}

export default WeatherApi;