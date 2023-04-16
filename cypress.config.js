const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.espn.com/?src=com&_adblock=true",
    page_objects: "cypress/suport/page_objects/**/*.js",
    testIsolation: false,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920
  
  },
});
