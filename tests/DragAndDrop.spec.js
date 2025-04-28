import {test,expect} from '@playwright/test'

test('Drag and Drop', async ({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    
    const seoul = await page.locator('#box5')
    const south_korea = await page.locator('#box105')

    //approach 1
    /*await seoul.hover()
    await page.mouse.down()

    await south_korea.hover()
    await page.mouse.up()
    */

    //approach 2
    await seoul.dragTo(south_korea)

    await page.waitForTimeout(4000)
})