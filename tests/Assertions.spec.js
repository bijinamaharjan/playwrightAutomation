import {test, expect} from '@playwright/test'

test('Assertions Example', async({page}) =>{
    
    await page.goto('https://glowktm.com/')
    //tohaveurl assertionx
    await expect(page).toHaveURL('https://glowktm.com/')

    //tohavetitle assertion
    await expect(page).toHaveTitle('GlowKtm | Homepage')
    const logo = await page.locator('img[alt="GlowKtm"]')
    //tobevisible assertion
    await expect(logo).toBeVisible(logo)

    //tobeEnabled assertion
    const sortBy = await page.locator('[placeholder="Sort by"]')
    await expect(sortBy).toBeEnabled()

    //toBeChecked Assertion
    const checkbox = await page.getByLabel('Cetaphil')
    await checkbox.check()
    await expect(checkbox).toBeChecked()

    //toHaveAttribute Assertion
    const attribute = await page.locator('[placeholder="Explore our beauty collection"]')
    // await expect(attribute).toHaveAttribute('autocomplete','off')

    //toHaveText Assertion
    const text=await page.locator('.w-screen.font-normal')
    await expect(text).toHaveText('Delivery All Over Nepal')

    //toContainText
    const text2= await page.locator('.w-screen.font-normal')
    await expect(text2).toContainText('Delivery')






    
    


    




    









})