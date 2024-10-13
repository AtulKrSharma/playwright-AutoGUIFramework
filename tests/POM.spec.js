import { test, expect } from "@playwright/test";
import { PomManager } from "../Pages/PomManager.js";

test.describe.only("testGroup", () => {
  let pom;

  test.beforeEach("Open base url", async ({ page }) => {
    pom = new PomManager(page);
    await pom.loginPage.navigate();
    await page.pause();

    //await page.goto("https://the-internet.herokuapp.com/login");
    //await expect(page).toHaveTitle(/The Internet/);
  });

  test("login with correct credentials", { tag: "@smoke" }, async () => {
    await pom.loginPage.login("tomsmith", "SuperSecretPassword!");
    // await page.pause();
    // await page.locator("#username").fill("tomsmith");
    // await page.getByLabel("password").fill("SuperSecretPassword!");
    // await page.getByRole("button", { disabled: false }).click();
    // await page.pause();
    // const welcomeMessage = page.locator(
    //   "//div[@id='content']//h4[@class='subheader']"
    // );
    // await expect(welcomeMessage).toContainText(
    //   "Welcome to the Secure Area. When you are done click logout below.",
    //   { ignoreCase: true }
    // );
    // // await page.getByRole("link", { name: "Logout" }).click();
    // // //await page.pause();
  });
});
