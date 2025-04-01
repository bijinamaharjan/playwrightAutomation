import {test, expect} from '@playwright/test'

test('Handling inner frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}) //using url
    // frame3.fill('[name="mytext3"]','Im frame3')

    //nested frames
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator('//div[normalize-space()="Frame3"]').check()
    
    await page.waitForTimeout(5000)



    


})