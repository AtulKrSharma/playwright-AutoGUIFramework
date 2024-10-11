import { test, expect } from "@playwright/test";

test("test", { tag: "@smokes" }, async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("Username").fill("tomsmith");

  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.getByRole("button", { name: " Login" }).click();
  // await page.pause(5000);
  await page.getByRole("link", { name: "Logout" }).click();
  await expect(page.getByText("You logged out of the secure")).toBeVisible();
  await expect(page.locator("h4")).toContainText(
    "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages."
  );
});
