import { expect, type Locator, type Page } from "@playwright/test";


export class ForumPage{

    readonly page: Page
    readonly header: Locator

    constructor(page: Page) {
        this.page = page
        this.header = page.getByRole('heading', { name: 'Parasoft Forums' })
    }

    async checkPageLoaded() {
        await expect(this.header).toBeVisible()
    }
}