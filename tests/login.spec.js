// @ts-check // Allows TypeScript engine built into VS Code to apply static type checking to your JavaScript file

// Import the test tool and assertion library from Playwright
const { test, expect } = require("@playwright/test");

// ========== Test case 01 - Login with valid credentials
test("Login with valid credentials", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Assertions after successful login
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator(".title")).toHaveText("Products");
});
