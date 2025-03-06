import {test, expect} from '@playwright/test'

test('Builtin locators in playwright', async({page}) =>{
    await page.goto('https://dev-ohana.ktmbees.com/')

    const logo = await page.getByAltText('ohana-logo')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Email').fill('pravin@ktmbees.com')
    await page.getByPlaceholder('Password').fill('nepal')

    await page.getByRole('checkbox').check()

    await page.getByRole('button', {type:'submit'}).click()

    await expect(await page.getByText('Properties')).toBeVisible();

    





})