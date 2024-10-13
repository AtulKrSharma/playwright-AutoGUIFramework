import { LoginPage } from "./LoginPage.js";
import { SecurePage } from "./SecurePage.js";

export class PomManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.securePage = new SecurePage(page);
  }
}
