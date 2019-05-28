const timeout = 5000
import {yellow} from 'chalk';

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://google.com')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      console.log(yellow('Running test1'))
      expect(text).toContain('google')
    })
  },
  timeout
)
