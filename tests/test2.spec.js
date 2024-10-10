import { test, expect } from "@playwright/test";

test("this is my 1st test", async ({ page }) => {
  await page.goto("https://head2hire.com/");
  await expect(page).toHaveTitle(/Head2hire | Where career gets built/);
  await page.pause();
  await page.getByRole("button", { name: "chbx" }).check();
  await page.locator("#id", { name: "rdd" }).click();
  await page.getByTestId("/**/").clear();
  await expect(page.getByRole("listitem")).toHaveCount(3);
});

//<label name=label1>My Label</label>
//<tag attribute=value>content</tag>
