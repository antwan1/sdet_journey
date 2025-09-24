// src/fixtures/test.ts
import { type Page, test as base } from "@playwright/test";




class JohnSmithPage {
  page: Page;


    constructor(page: Page) {
    this.page = page;
  }
}

interface MyFixtures {
  johnSmithPage: JohnSmithPage;
}


export * from "@playwright/test";
export const test = base.extend<MyFixtures>({
    johnSmithPage: async ({ browser }, use) => {
        const context = await browser.newContext ({storageState: "playwright/.auth/johnsmith.json"});
        const johnSmithPage = new JohnSmithPage(await context.newPage());
        await use(johnSmithPage);

    }

});




