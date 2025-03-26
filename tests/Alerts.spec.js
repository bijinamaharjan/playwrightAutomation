import {test, expect} from '@playwright/test'

test('Handling Alerts',async({page}) =>{
    await page.goto('https://admin-dev-agexpress.ktmbees.com/')
    
    //enable alert handler  //dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Quote request submitted!')
        await dialog.accept()

    })

    const submitButton = await page.locator('//button[@type="submit"]');
    await submitButton.click();

})