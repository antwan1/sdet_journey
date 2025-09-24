import { expect, type Locator, type Page } from "@playwright/test";

export class ContactUsPage {
    readonly page: Page
    readonly header: Locator

    constructor(page: Page) {
        this.page = page
        this.header = page.getByRole('heading', { name: 'Customer Care' })
    }

    async checkPageLoaded() {
        await expect(this.header).toBeVisible()
    }
}