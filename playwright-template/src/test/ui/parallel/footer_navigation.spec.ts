import { test } from "@playwright/test";
import { LoginPage } from "../../../pages/login.page";
import { Footer } from "../../../pages/footer.page";
import { AboutUsPage } from "../../../pages/aboutUs.page";
import { ContactUsPage } from "../../../pages/contactUs.page";
import { ForumPage } from "../../../pages/forum.page";



test.use({
  ignoreHTTPSErrors: true,
  storageState: { cookies: [], origins: [] },
});


test.describe("navigation via footer links and verify pages ", () => {
test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.checkPageLoaded();
  

    const footer = new Footer(page);
    await footer.checkPageLoaded();
  });



  test("navigate to About Us page", async ({ page }) => {
    const footer = new Footer(page);
    await footer.aboutUsLink.click();
    const aboutUsPage = new AboutUsPage(page);
    await aboutUsPage.checkPageLoaded();
  });

  test("navigate to Contact Us page", async ({ page }) => {
    const footer = new Footer(page);
    await footer.contactLink.click();
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.checkPageLoaded();
  });

  test("navigate to Forum page", async ({ page }) => {
    const footer = new Footer(page);
    await footer.forumLink.click();
    const forumPage = new ForumPage(page);
    await forumPage.checkPageLoaded();
  });
});