const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 4000,
  e2e: {
    failOnStatusCode: false,
    baseUrl: 'http://localhost:3000',
  },
})
