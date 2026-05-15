export async function navigateToApp(page, appName) { 
  await page.click(`text=${appName}`); 
}