export async function login(page) { 
  await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/"); 
  await page.fill('input[id="username"]', "admin"); 
  await page.fill('input[id="password"]', "password123"); 
  await page.click('button[type="submit"]'); 
  await page.waitForSelector('text=Web Application');
}