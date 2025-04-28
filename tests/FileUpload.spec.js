import {test, expect} from '@playwright/test'

test('Uploading Single File', async ({page}) =>{
    await page.goto('https://filebin.net/')
    // await page.locator('#fileField').click()
    await page.locator('#fileField').setInputFiles('tests/Files/invoice-AG-27.pdf')

    await page.waitForTimeout(5000)


})


test('Uploading multiple File', async ({page}) =>{
   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/Files/invoice-AG-27.pdf' , 'tests/Files/label-AG-21.pdf' , 'tests/Files/1738644604772-shiment-details.pdf' ])
    await page.waitForTimeout(7000)



    
})