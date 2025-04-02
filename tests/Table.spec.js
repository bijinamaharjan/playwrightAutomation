import { test, expect } from '@playwright/test';

test('Handling tables or pagination tables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //1) Total number of rows and columns
    const columnCount = await table.locator('thead tr th')
    const rowCount = await table.locator('tbody tr')

    // // Corrected console.log statements
    // console.log('Number of columns:', columnCount.count());  //.count() should be added to //1 to count
    // console.log('Number of rows:', rowCount.count())

    // Use the resolved values directly in assertions
    // expect(columnCount).toBe(4);
    //expect(rowCount).toBe(5);
   

    // 2) Select the checkbox for (single option)
    /*const machedRow = rowCount.filter({
        has: page.locator('td'),
        hasText : 'Smartwatch'
    })
    await machedRow.locator('input').check()
    */


    // 3) Select multiple options by re-usuable fucntion
    async function selectProducts(rowCount, page, name)
    {
        const machedRow = rowCount.filter({
            has: page.locator('td'),
            hasText :  name
        })
        await machedRow.locator('input').check()
    }
    /*
    await selectProducts(rowCount, page, 'Smartwatch')
    await selectProducts(rowCount, page, 'Laptop')
    await selectProducts(rowCount, page, 'Tablet')
    */

    //4) print all product details using loop
    /* for(let i=0; i< await rowCount.count(); i++)
        {
            const row = rowCount.nth(i)
            const tds = row.locator('td')
            
            for(let j=0; j< await tds.count()-1;j++){
                console.log(await tds.nth(j).textContent())

            }
        }
       */ 

    //  5) read data from multiple pages(pagination)
    const pages = await page.locator('.pagination li a')
    await pages.count()
    console.log('Number of pages in the table:',await  pages.count())

    for(let p=0; p< await  pages.count(); p++){

        if(p>0){
            await pages.nth(p).click()
        }
        for(let i=0; i< await rowCount.count(); i++)
            {
                const row = rowCount.nth(i)
                const tds = row.locator('td')
                
                for(let j=0; j< await tds.count()-1;j++){
                    console.log(await tds.nth(j).textContent())
    
                }
            }
            await page.waitForTimeout(4000);         
        
    }
    
    await page.waitForTimeout(5000); 

});
