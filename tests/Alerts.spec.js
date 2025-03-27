import {test, expect} from '@playwright/test'

test('Handling Alerts',async({page}) =>{
    await page.goto('https://admin-dev-agexpress.ktmbees.com/')
    
    await page.getByRole('button', { name: 'Request a Quote' }).click();

    await page.waitForURL('https://admin-dev-agexpress.ktmbees.com/requestQuote')
    await expect(page).toHaveURL('https://admin-dev-agexpress.ktmbees.com/requestQuote')

    await page.getByPlaceholder('e.g. John Doe').fill('test test')
    await page.getByPlaceholder('e.g. john@gmail.com').fill('test7@gmail.com')
    await page.getByPlaceholder('e.g. 98XXXXXXXX').fill('9873487348') 
    await page.getByPlaceholder('Select a Subject').fill('Subject')
    await page.getByPlaceholder('minimum 150 words').fill('Lorem ipsum dolor sit amet consectetur adipiscing elit Sed tincidunt nulla ac malesuada vestibulum erat lacus eleifend purus et interdum sapien justo ut turpis Fusce auctor odio sed fermentum interdum libero velit facilisis quam non elementum purus nisi eu nisi Integer nec nunc non velit malesuada posuere a nec felis Curabitur auctor felis id libero cursus at pharetra lacus ultrices Nulla eget nisl nec turpis condimentum tincidunt at in ex Suspendisse potenti Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Duis ')
    await page.getByRole('button', {name : 'Submit'}).click()

    await page.click('//button[@type="submit"]')
    await page.waitForTimeout(5000)

     //enable alert handler  //dialog window handler
     page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Quote request submitted!')
        await page.waitForURL('')
        await dialog.accept()

    })

test('Alert with',async ({page}) =>{




})

})