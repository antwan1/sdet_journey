import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly forgotLoginInfo: Locator;
    readonly registerLink: Locator;
    readonly paraBankLogo: Locator;
    readonly homeLink: Locator;
    readonly aboutLink: Locator;
    readonly contactLink: Locator;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.forgotLoginInfo = page.getByRole('link', { name: 'Forgot login info?' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.paraBankLogo = page.getByRole('img', { name: 'ParaBank' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.aboutLink = page.getByRole('link', { name: 'About' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.heading = page.getByRole('heading', { name: 'Customer Login' });

    }

    async goto() {
        await this.page.goto(process.env.BASE_URL + '/index.html');
    }


    /**
     * Verifies that all essential elements of the login page are visible.
     */
    async checkPageLoaded() {
        await expect(this.heading).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.forgotLoginInfo).toBeVisible();
        await expect(this.registerLink).toBeVisible();
        await expect(this.paraBankLogo).toBeVisible();
        // await expect(this.homeLink).toBeVisible();
        // await expect(this.aboutLink).toBeVisible();
        // await expect(this.contactLink).toBeVisible();
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickForgotLoginInfo() {
        await this.forgotLoginInfo.click();
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async clickParaBankLogo() {
        await this.paraBankLogo.click();
    }

    async clickHomeLink() {
        await this.homeLink.click();
    }

    async clickAboutLink() {
        await this.aboutLink.click();
    }

    async clickContactLink() {
        await this.contactLink.click();
    }
    /**
     * Convenience method to perform login with the provided username and password.
     */
    async performLogin(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}