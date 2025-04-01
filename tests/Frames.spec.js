import {test, expect} from '@playwright/test'

test('Handling frames/iframes', async ({ page }) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const lframe= await page.frames()
    console.log('Number of frames: ',lframe.length)

    //appraoch 1 using frame objects : name or url of the page
    // const frame1= await page.frame('frame1') // using name
    // const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}) //using url
    // frame3.fill('[name="mytext3"]','Im frame3')

    //approach 2 using frame locator
    const input1 = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    input1.fill('Im frame 1')

    await page.waitForTimeout(5000)






    



    

 



})