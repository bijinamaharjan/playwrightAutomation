import {test,expect} from '@playwright/test'

test('Handling Radio Buttons',async({page}) =>{
    await page.goto("https://admin-dev-agexpress.ktmbees.com/login")
    await expect(page).toHaveURL('https://admin-dev-agexpress.ktmbees.com/login')
    await expect(page).toHaveTitle('')

    const email = page.locator('[name="email"]'); // Create a Locator
    await expect(email).toBeVisible(); // Assert visibility
    await email.fill('sagar@ktmbees.com'); // Fill the email field

    const password = await page.fill('[type="password"]', 'ktm@123')
    await page.locator('[type="submit"]').click()

    //Add new shipment button
    await page.locator('//button[3]').click()

    
    await page.locator('//label[normalize-space()="Female"]').check()
    expect(page.locator('//label[normalize-space()="Female"]')).toBeChecked()

    await page.locator('//label[normalize-space()="Male"]').check()
    //await expect(page.locator('//label[normalize-space()="Male"]')).n()

    await page.locator('input[name="sender.contactNumber"]').fill('98127828682')
    await page.locator('[name="sender.email"]').fill("sagar@gmail.com")
    await page.locator('[name="sender.zipCode"]').fill('12345')
    await page.locator('[name="sender.state"]').fill('Bagmati')
    await page.locator('[name="sender.city"]').fill('ktm')
    await page.locator('[name="sender.address"]').fill('Thankot')
    await expect(page.locator('[name="billingAddress"]')).toBeEnabled();
    await expect(page.locator('[name="returnAddress"]')).toBeEnabled()










    










} )