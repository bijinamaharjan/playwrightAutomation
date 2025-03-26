import {test,expect} from '@playwright/test'

test('handling Dropdowns',async ({page}) =>{
    await page.goto("https://dev.ebookingnepal.com/")
    await expect(page).toHaveTitle("")
    await expect(page).toHaveURL("https://dev.ebookingnepal.com/")

    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page).toHaveURL('https://dev.ebookingnepal.com/signin')

    const email= await page.getByPlaceholder('Email')
    await expect(email).toBeVisible()
    await expect(email).toBeEnabled()
    await email.fill('maharjanbijina60@gmail.com')

    const password = page.getByPlaceholder('Password')
    await expect(password).toBeEnabled()
    await password.fill('Bijina1022')

    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(5000)
    await page.getByText('Dashboard')
    await page.waitForURL('https://dev.ebookingnepal.com/property-owner')
    

})