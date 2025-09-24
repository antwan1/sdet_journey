import { test } from "@playwright/test";
import { LoginPage } from "../../../pages/login.page";
import { PasswordResetPage } from "../../../pages/password_reset.page";





test.use({
  ignoreHTTPSErrors: true,
  storageState: { cookies: [], origins: [] },
});


test.describe("Password Reset Flow", () => {
  test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.checkPageLoaded();
  });


  test("navigate to Password Reset page", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickForgotLoginInfo();
    const passwordResetPage = new PasswordResetPage(page);
    await passwordResetPage.checkPageLoaded();
  });

});