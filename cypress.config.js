const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  video: false,
  screenshotOnRunFailure: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
