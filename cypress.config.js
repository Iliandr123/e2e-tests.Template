const { defineConfig } = require('cypress');
const mochawesomeWriter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({

  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporterOptions.json',
    },
    viewportWidth: 1200,
    viewportHeight: 660,
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://tourmalinecore.github.io/React-Admin-Template',
    video: false,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      mochawesomeWriter(on, config);
    },
  },
});
