import {test,expect} from '@playwright/test'

test('Soft Assertions Example',async({page})=>{
    await page.goto('https://glowktm.com/')

    //hard assertions
    /* await expect(page).toHaveURL('https://glowktm.com/')
    await expect(page).toHaveTitle('GlowKtm | Homepage')
    const logo= await page.locator('img[alt="GlowKtm"]')
    await expect(logo).toBeVisible(logo) */

    //soft assertions>> use soft keyword before expect
    //doesnot terminate the whole program

    await expect.soft(page).toHaveURL('https://glowktm.com/123')  //mistake url but continue ececuting other line of codes
    await expect.soft(page).toHaveTitle('GlowKtm | Homepage')
    const logo= await page.locator('img[alt="GlowKtm"]')
    await expect.soft(logo).toBeVisible(logo)






})