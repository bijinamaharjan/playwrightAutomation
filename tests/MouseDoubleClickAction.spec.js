import {test, expect} from '@playwright/test'

test("Mouse Double Click Action", async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const btn = await page.locator('//button[normalize-space()="Copy Text"]')

    //apply double click
    await btn.dblclick()

    const field2 = await page.locator('#field2')

    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)

})