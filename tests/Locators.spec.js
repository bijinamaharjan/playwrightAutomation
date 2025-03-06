import {test, expect} from '@playwright/test'

test('Locators In Playwright', async({page}) => {
    await page.goto('https://dev-ohana.ktmbees.com/')
    await expect(page).toHaveURL('https://dev-ohana.ktmbees.com/')

    //enter username
    await page.fill('[placeholder="Email"]','pravin@ktmbees.com')

    //enter password
    await page.fill('[name="password"]','nepal')

    //click login
    await page.click('button[type="submit"]')

    //navigate home page
   await expect({page}).waitForResponse('https://dev-ohana.ktmbees.com/agent-dashboard/properties');

    //Check logout presence after logging in
    await page.locator('div.mantine-Avatar-root.cursor-pointer').click()

    await expect(page.locator('text=logout')).toBeVisible()
})

