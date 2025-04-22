import {test, expect} from '@playwright/test'

// test.skip(' Date picker ',async ({ page }) => {

//     await page.goto('https://dev.ebookingnepal.com/')
//     //easy format (direct method)x
//     await page.fill('[data-path="checkIn"]', '2025-04-10') 
//     await page.fill('[data-path="checkOut"]', '2025-04-15')
//     await page.waitForTimeout(5000) 

// })

test('Datepicker ii', async ({ page }) => {
    const date = "22";
    const year = "2025";
    const month = "April";

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Open calendar
    await page.click('#datepicker');

    // Loop until desired month and year is found
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        }

        const nextButton = page.locator('a[data-handler="next"]');
        await expect(nextButton).toBeVisible();
        await expect(nextButton).toBeEnabled();
        await nextButton.click();
        await page.waitForTimeout(200); // short delay to allow DOM to update
    }

    // Select the date
    const dates = await page.locator('//a[@class="ui-state-default"]').all();
    for (const dt of dates) {
        const text = await dt.textContent();
        if (text === date) {
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(3000); // Optional: observe the result
});

            //without loop
            //await page.locator('//a[normalize-space()="22"]').click()
            
            