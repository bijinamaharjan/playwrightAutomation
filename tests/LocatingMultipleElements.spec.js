import {test, expect} from '@playwright/test'

test('Locating Multiple Elements Example', async({page}) =>{

    await page.goto('https://dev-ohana.ktmbees.com/')
    await expect(page).toHaveURL('https://dev-ohana.ktmbees.com/')

    //enter username
    await page.fill('[placeholder="Email"]','pravin@ktmbees.com')

    //enter password
    await page.fill('[name="password"]','nepal')

    //click login
    await page.click('button[type="submit"]')

    //navigate home page
    // await page.waitForResponse('https://dev-ohana.ktmbees.com/agent-dashboard/properties');

    const listItems = await page.getByRole('listitem').all(); 

    // Iterate over each list item
    for (const li of listItems) {
    // Get and print the text content
    const li = await li.textContent(); 
    console.log(li); 
}   
})