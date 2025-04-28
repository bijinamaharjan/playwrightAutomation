import {test, expect} from '@playwright/test'

test('Keyboard Actions', async ({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')

   await page.type('[name ="text1"]', 'Welcome')

    //Select text - ctrl A
    await page.keyboard.press('Meta+A') //press keyword for multiple keys
    //Copy text - ctrl C
    await page.keyboard.press('Meta+C')
    //tab key
    await page.keyboard.down('Tab') //for single key press
    await page.keyboard.up('Tab')   // release
    //ctrl V
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000)
})