import { test, expect } from "@playwright/test";

test("basic UI test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});