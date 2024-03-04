const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Globals
  // Timeouts
  // Folders / Files
  // Screenshots
  // Videos
  video: false,
  // Downloads
  // Browser
  // Viewport
  // Actionability
  // Experimental
  e2e: {
    setupNodeEvents(on, config) {

    },
    // Test Type Configuration
    testIsolation: true,
    // Environment Configuration
    environment: 'local',
    baseUrl: 'http://localhost:8080',
    apiVersion: '/api/v3',
    specPattern: 'cypress/api/**/*.cy.js',
    // Authentication Configuration
  },
});
