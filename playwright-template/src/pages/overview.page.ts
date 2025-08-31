import { expect, type Locator, type Page } from "@playwright/test";


export class OverviewPage{

readonly heading: Locator;
readonly page: Page;
readonly openNewAccountLink: Locator;
readonly accountsOverviewLink: Locator;
readonly transferFundsLink: Locator;
readonly billPayLink: Locator;
readonly findTransactionsLink: Locator;
readonly updateContactInfoLink: Locator;
readonly requestLoanLink: Locator;
readonly logOutLink: Locator;
readonly accountsOverviewHeading: Locator;

userHeading?: Locator;

constructor(page: Page){

this.page = page;
this.heading = page.getByRole("heading", { name: "Account Services" });
this.openNewAccountLink = page.getByRole("link", { name: "Open New Account" });
this.accountsOverviewLink = page.getByRole("link", { name: "Accounts Overview" });
this.transferFundsLink = page.getByRole("link", { name: "Transfer Funds" });
this.billPayLink = page.getByRole("link", { name: "Bill Pay" });
this.findTransactionsLink = page.getByRole("link", { name: "Find Transactions" });
this.updateContactInfoLink = page.getByRole("link", { name: "Update Contact Info" });
this.requestLoanLink = page.getByRole("link", { name: "Request Loan" });
this.logOutLink = page.getByRole("link", { name: "Log Out" });
this.accountsOverviewHeading = page.getByRole("heading", { name: "Accounts Overview" });
}


async checkPageLoaded(){
await expect(this.heading).toBeVisible();
await expect(this.accountsOverviewHeading).toBeVisible();
await expect(this.openNewAccountLink).toBeVisible();
await expect(this.accountsOverviewLink).toBeVisible();
await expect(this.transferFundsLink).toBeVisible();
await expect(this.billPayLink).toBeVisible();
await expect(this.findTransactionsLink).toBeVisible();
await expect(this.updateContactInfoLink).toBeVisible();
await expect(this.requestLoanLink).toBeVisible();
await expect(this.logOutLink).toBeVisible();
}


async clickOpenNewAccountLink(){
await this.openNewAccountLink.click();  

    }
async clickAccountsOverviewLink(){
await this.accountsOverviewLink.click();    
}

async clickTransferFundsLink(){
await this.transferFundsLink.click();
}

async clickBillPayLink(){
await this.billPayLink.click();
}

async clickFindTransactionsLink(){
await this.findTransactionsLink.click();
}

async clickUpdateContactInfoLink(){
await this.updateContactInfoLink.click();
}

async clickRequestLoanLink(){
await this.requestLoanLink.click();
}

async clickLogOutLink(){
await this.logOutLink.click();
}


async verifyUserHeading(userName:string){
    this.userHeading = this.page.getByText(`Welcome ${userName}`, {exact: true});
    await expect(this.userHeading).toBeVisible();

}
}