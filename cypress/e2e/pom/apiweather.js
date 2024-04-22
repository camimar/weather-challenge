class apiWeather {
    getWeatherByCityName(cityName) {
        const apiKey = Cypress.env('openWeatherApiKey');
        return cy.request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    }
  
    getWeatherByCityId(cityId) {
        const apiKey = Cypress.env('openWeatherApiKey');
        return cy.request(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`);
    }
  
    getForecastByCityName(cityName) {
        const apiKey = Cypress.env('openWeatherApiKey');
        return cy.request(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
    }
  }
  
  export default apiWeather;