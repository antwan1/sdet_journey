import { expect, type Locator, type Page } from "@playwright/test";

export class Footer{
    readonly page: Page;
    readonly aboutUsLink: Locator;
    readonly servicesLink: Locator;
    readonly locationsLink: Locator;
    readonly productsLink: Locator;
    readonly forumLink: Locator;
    readonly siteMapLink: Locator;
    readonly contactLink: Locator;
    readonly homeLink: Locator;





    constructor(page: Page){
        this.page = page;
        this.aboutUsLink = page.locator('#footerPanel').getByRole('link', { name: 'About Us' })
        this.servicesLink = page.locator('#footerPanel').getByRole('link', { name: 'Services' });
        this.locationsLink = page.locator('#footerPanel').getByRole('link', { name: 'Locations' });
        this.productsLink = page.locator('#footerPanel').getByRole('link', { name: 'Products' });
        this.forumLink = page.locator('#footerPanel').getByRole('link', { name: 'Forum' });
        this.siteMapLink = page.locator('#footerPanel').getByRole('link', { name: 'Site Map' });
        this.contactLink = page.locator('#footerPanel').getByRole('link', { name: 'Contact' });
        this.homeLink = page.locator('#footerPanel').getByRole('link', { name: 'Home', exact: false });

    }

    async checkPageLoaded(){
        await expect(this.aboutUsLink).toBeVisible();
        await expect(this.servicesLink).toBeVisible();
        await expect(this.locationsLink).toBeVisible();
        await expect(this.productsLink).toBeVisible();
        await expect(this.forumLink).toBeVisible();
        await expect(this.siteMapLink).toBeVisible();
        await expect(this.contactLink).toBeVisible();
        //await expect(this.homeLink).toBeVisible();

}



async clickAboutUsLink(){
    await this.aboutUsLink.click();
}

async clickServicesLink(){
    await this.servicesLink.click();
}

async clickLocationsLink(){
    await this.locationsLink.click();
}

async clickProductsLink(){
    await this.productsLink.click();
}
async clickForumLink(){
    await this.forumLink.click();
}
async clickSiteMapLink(){
    await this.siteMapLink.click();
}
async clickContactLink(){
    await this.contactLink.click();
}   




}