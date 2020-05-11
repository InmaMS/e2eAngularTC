import { TutorialPage } from "../pages/TutorialPage";
import { HomePage } from "../pages/HomePage";
import { Given, When, Then } from "cucumber";
import { config } from "../protractor.config";
import { expect } from "chai";

var tutorialPage = new TutorialPage();
var homePage = new HomePage();

Given(/^User starts Angular home page$/, async () => {
    await homePage.OpenBrowser(config.baseUrl as string);
});

When(/^User select '([^"]*)' option from the main page$/, async(sectionName: string) => {
    let section = sectionName.split(':');
    if (section[0] === 'Learn')
        await homePage.clickOnLearnMenu();
    if (section[1] === 'Tutorial')
        await homePage.clickOnTutorialEntry();
})

Then(/^The Tutorial Page is displayed$/, async() => {
    let isLoaded = await homePage.isHomePageLoaded();
    expect(isLoaded, 'Main page is not loaded').to.equals(false);
})

