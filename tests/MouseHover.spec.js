import {test, expect} from '@playwright/test'

test('Mouse Hover Action', async ({ page }) =>{
    await page.goto('https://www.apple.com/')
    
    const storeLink = page.getByRole('link', { name: 'Store' }).nth(0); // usually the navbar
    await storeLink.hover(); //hover keyword

    const ipad = page.locator('.globalnav-link-ipad');
    await expect(ipad).toBeVisible();
    await ipad.click();




})