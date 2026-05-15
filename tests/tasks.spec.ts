import { test, expect } from "@playwright/test"; 
import tasks from "../data/tasks.json"; 
import { login } from "../helpers/login"; 
import { navigateToApp } from "../helpers/navigation"; 
 
test.describe("Task Validation", () => { 
 
tasks.forEach((t) => { 
    test(`Validate task: ${t.task}`, async ({ page }) => { 
 

await login(page); 
      await navigateToApp(page, t.app); 


      // Find the column by its header (h2)
const columnHeader = page.getByRole('heading', { level: 2, name: new RegExp(t.column) });
await expect(columnHeader).toBeVisible();

// Go to the column container
const column = columnHeader.locator('..');

// Find the task card by its h3 title inside that column
const taskCard = column.getByRole('heading', { level: 3, name: t.task }).locator('..');
await expect(taskCard).toBeVisible();

// Now assert tags inside that task card
for (const tag of t.tags) {
  await expect(taskCard.getByText(tag, { exact: true })).toBeVisible();
}




    }); 
  }); 
 

});