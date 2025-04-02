import { test, expect } from '@playwright/test';

test('Handling tables or pagination tables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    // Total number of rows and columns
    const columnCount = await table.locator('thead tr th').count();
    const rowCount = await table.locator('tbody tr').count();

    // Corrected console.log statements
    console.log('Number of columns: ${columnCount}');
    console.log('Number of rows: ${rowCount}');

    // Use the resolved values directly in assertions
    expect(columnCount).toBe(4);
    expect(rowCount).toBe(5);

    await page.waitForTimeout(5000);    
});
