import { expect, type Locator, type Page } from "@playwright/test";

export class PasswordResetPage{

    readonly page: Page
    readonly header: Locator




    constructor(page: Page) {
        this.page = page
        this.header = page.getByRole('heading', { name: 'Customer Lookup' })
    }


    async goto() {
        await this.page.goto("/password-reset");
    }



    async checkPageLoaded() {
        await expect(this.header).toBeVisible();
    }
}