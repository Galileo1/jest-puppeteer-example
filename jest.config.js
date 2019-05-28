module.exports = {
  verbose: true,
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|__test__.js)$",
}
