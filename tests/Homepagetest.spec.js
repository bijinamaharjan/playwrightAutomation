const {test, expect} = require('@playwright/test')

test('HomePage title and Url test', async({page}) =>{
    await page.goto('https://dev-ohana.ktmbees.com/')
    const pageTitle = await page.title()
    console.log('page title is ', pageTitle)
    await expect('page').toHaveTitle('')

    const pageUrl = await page.url()
    console.log('Page Url is ', pageUrl)
    await expect('page').toHaveURL('https://dev-ohana.ktmbees.com/')

    await page.close()






})


