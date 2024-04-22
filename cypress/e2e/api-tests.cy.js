import apiWeather from '../e2e/pom/apiweather';

describe('Weather API Challenge Tests', () => {
  const weatherApi = new apiWeather();

  it('Validate that API returns current weather data by city name', () => {
    weatherApi.getWeatherByCityName('Merida').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('weather')
        console.log('Current weather data for Merida:', response.body)
    })
  });

  it('Verify if API returns weather data by city unique ID', () => {
    weatherApi.getWeatherByCityId('2172797').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('weather')
        console.log('Weather data by city ID (2172797):', response.body)
    })
  });

  it('User is able to check 5-day forecast by city name', () => {
    weatherApi.getForecastByCityName('Buenos Aires').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('list')
        console.log('5-day forecast for Buenos Aires:', response.body)
    })
  });
});