const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    openWeatherApiKey: 'd9ecde089015afb6317fd9cfbf3fb62e',
  },
});
