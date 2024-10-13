export class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async fillAndSubmit(locator, text, submitButton) {
    await this.page.locator(locator).fill(text);
    await this.safeClick(submitButton);
  }

  async waitForElement(locator, options = { timeout: 5000 }) {
    await this.page.waitForSelector(locator, options);
  }
  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isChecked(selector) {
    return await this.page.isChecked(selector);
  }
}
