import Weather from "../weather";

describe('Weather', () => {
  it('takes JSON data from api and returns it as a JS object', () => {
    const fakeApi = {
      fetchWeatherData (city: string, callBack: Function) {
        return 'Cloudy with a chance of meatballs.';
      }
    }

    const weather = new Weather(fakeApi);
    weather.fetch('Test-city')
    expect(weather.getWeatherData()).toEqual('Cloudy with a chance of meatballs.')

  })
})
