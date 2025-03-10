import { test, expect } from "@playwright/test";
	
test("homepage should show the News link", async ({ page }) => {
  await page.goto("https://www.noroff.no/en");
  await expect(page.getByRole("link", { name: "News" })).toBeVisible();
});