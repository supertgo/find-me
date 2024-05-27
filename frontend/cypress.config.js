const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 8000,
  e2e: {
    failOnStatusCode: false,
    baseUrl: 'http://localhost:3000',
  },
})
