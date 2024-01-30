const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
  
    },
    baseUrl: 'https://remote.com/',
    "defaultCommandTimeout": 8000,
      "pageLoadTimeout": 1000000,
      "viewportWidth": (1500,800),
  },
});
