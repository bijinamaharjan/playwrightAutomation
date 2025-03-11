import {test,expect} from '@playwright/test'

test('handling Dropdowns',async ({page}) =>{
    await page.goto("https://admin-dev-agexpress.ktmbees.com/login")
    await expect(page).toHaveTitle("")
    await expect(page).toHaveURL("https://admin-dev-agexpress.ktmbees.com/login")

    //Login
    const email= await page.getByPlaceholder('Email')
    await expect(email).toBeEnabled()
    await expect(email).toBeVisible()
    await email.fill("sagar@ktmbees.com")

    const pw= await page.getByPlaceholder("Password").fill("ktm@123")

    await page.locator('[type="submit"]').click()
    
    //Shipments page
   await expect(page.getByText("Shipment sent")).toBeVisible()

   //Add new shjipment button
   await page.locator("div[class='text-white']").click()
   await page.waitForURL("https://admin-dev-agexpress.ktmbees.com/dashboard/branch-admin/shipments/shipment-list/add")





    

})