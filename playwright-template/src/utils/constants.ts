import { type Page, test as base } from "@playwright/test";




class ParaBankAUserPage{
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }
}


interface MyFixtures {
    
    userA: ParaBankAUserPage;
}


export * from "@playwright/test";
export const test = base.extend<MyFixtures>({
userA: async ({browser}, use) => {
    const context = await browser.newContext({storageState: "playwright-template/.auth/userA.json"});
    const userA = new ParaBankAUserPage(await context.newPage());
    await use(userA);
}
})
