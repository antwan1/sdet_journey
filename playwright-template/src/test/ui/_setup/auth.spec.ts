import { test as setup } from "@playwright/test";
import path from "path";
import { LoginPage } from "../../../pages/login.page";
import { OverviewPage } from "../../../pages/overview.page";

const userAAuthfile = path.join(__dirname, "..", "..", "..", ".auth", "userA.json");

// Use test.use for global context options

setup("should authenticate and persist storage state for user A", async ({page}) => {

    const username = process.env.E2E_USERNAME;
    const password = process.env.E2E_PASSWORD;
    const fullname = process.env.E2E_FULLNAME;

    if (!username || !password || !fullname) {
        throw new Error("Missing username, password or fullname");
    }

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(username, password);

    const overviewPage = new OverviewPage(page);
    await overviewPage.checkPageLoaded();
    await overviewPage.verifyUserHeading(fullname);

    await page.context().storageState({path: userAAuthfile});

});
