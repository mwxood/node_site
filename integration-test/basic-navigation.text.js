const portfinder = require('portfinder')
const puppeteer = require('puppeteer')

const app = require('../medowlark.js')

let server = null
let port = null


beforeEach(async () => {
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

test('Home page opened page about', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id]'),
    ])

    expect(page.url()).toBe(`http://localhost"${port}/about`)
    await browser.close()
})