// import { test, expect } from "@playwright/test";

// test.describe.only("testGroup", () => {
//   test.beforeEach("Open base url", async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/login");
//     await expect(page).toHaveTitle(/The Internet/);
//   });

//   test(
//     "login with correct credentials",
//     { tag: "@smoke" },
//     async ({ page }) => {
//       await page.locator("#username").fill("tomsmith");
//       await page.getByLabel("password").fill("SuperSecretPassword!");
//       await page.getByRole("button", { disabled: false }).click();
//       const welcomeMessage = await page.locator(
//         "//div[@id='content']//h4[@class='subheader']"
//       );
//       expect(welcomeMessage).toContainText(
//         "Welcome to the Secure Area. When you are done click logout below.",
//         { ignoreCase: true }
//       );
//       await page.getByRole("link", { name: "Logout" }).click();
//       //await page.pause();
//     }
//   );
// });
