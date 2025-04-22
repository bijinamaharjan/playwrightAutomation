const { chromium } = require('playwright');

async function runTest(userId) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://glowktm.com/');
  
}

// Simulate 50 users in parallel
(async () => {
  const users = [...Array(50).keys()];
  await Promise.all(users.map(id => runTest(id)));
})();
