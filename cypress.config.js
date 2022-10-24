const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  e2e: {
    reporter: 'cypress-qase-reporter',
    reporterOptions: {
      apiToken: 'c8a3108a147bf48449b7c1dd01466c1c9f61f90b',
      projectCode: 'INNCIRCLE',
      logging: true,
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
      allureWriter(on, config);
      return config;
    },
  },
});
