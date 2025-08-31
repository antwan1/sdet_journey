import { expect, type Locator, type Page } from "@playwright/test";


export class SideNav{

    readonly solutionsLink: Locator;
    readonly page: Page;
    readonly servicesLink: Locator;
    readonly productsLink: Locator;
    readonly locationsLink: Locator;
    readonly adminPageLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.solutionsLink = page.getByText('Solutions' );
        this.servicesLink = page.getByRole('link', { name: 'Services' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.locationsLink = page.getByRole('link', { name: 'Locations' });
        this.adminPageLink = page.getByRole('link', { name: 'Admin' });
    }


    async clickSolutionsLink() {
        await this.solutionsLink.click();
    }

    async clickServicesLink() {
        await this.servicesLink.click();
    }

    async clickProductsLink() {
        await this.productsLink.click();
    }

    async clickLocationsLink() {
        await this.locationsLink.click();
    }

    async clickAdminPageLink() {
        await this.adminPageLink.click();
    }

}