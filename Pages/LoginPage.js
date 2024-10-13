const { CommonActions } = require("../Utils/CommonActions");

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.actions = new CommonActions(page); // Initialize CommonActions

    // Selectors using Playwright's recommended locators

    // Using getByRole (Button and Alert)
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.getByRole("alert");

    // Using getByText (Static text on the page)
    this.forgotPasswordLink = page.getByText("Forgot your password?");

    // Using getByLabel (Input fields with label)
    this.usernameInput = page.getByLabel("Username");
    this.passwordInput = page.getByLabel("Password");

    // Using getByPlaceholder (Placeholders inside input fields)
    this.usernameInputPlaceholder = page.getByPlaceholder(
      "Enter your username"
    );
    this.passwordInputPlaceholder = page.getByPlaceholder(
      "Enter your password"
    );

    // Using getByAltText (Images with alternative text)
    this.logoImage = page.getByAltText("Company Logo");

    // CSS and XPath locators
    this.cssButton = page.locator("css=button"); // CSS locator for button
    this.xpathButton = page.locator("xpath=//button"); // XPath locator for button
  }

  async login(username, password) {
    await this.actions.type(this.usernameInputPlaceholder, username);
    await this.actions.type(this.passwordInputPlaceholder, password);
    await this.actions.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  // New methods to click buttons using CSS and XPath
  async clickButtonUsingCss() {
    await this.cssButton.click(); // Click using CSS selector
  }

  async clickButtonUsingXPath() {
    await this.xpathButton.click(); // Click using XPath selector
  }

  async navigate() {
    await this.actions.navigate("https://the-internet.herokuapp.com/login");
  }

  async login(uname, pwd) {
    await this.actions.fill(this.username, uname);
    await this.actions.fill(this.password, pwd);
    await this.actions.click(this.loginButton);
  }
}
