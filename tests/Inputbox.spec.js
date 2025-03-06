import {test,expect} from '@playwright/test'

test('Handle InputBox ',async({page})=>{
    await page.goto('https://admin-dev-agexpress.ktmbees.com/login')

    await expect(page).toHaveURL('https://admin-dev-agexpress.ktmbees.com/login')
    expect(page).toHaveTitle('')

    await expect(page.getByPlaceholder('Email')).toBeVisible()
    await expect(page.getByPlaceholder('Email')).toBeEmpty()
    await expect(page.getByPlaceholder('Email')).toBeEditable()
    await expect(page.getByPlaceholder('Email')).toBeEnabled()
    
   
    await page.getByPlaceholder('Email').fill('pravin@ktmbees.com') 
    await page.getByPlaceholder('Password').fill('ktm@123')
    await page.getByRole('button', { type: 'Submit' }).click();

    await page.waitForTimeout(5000) //pause  the code for some time



})