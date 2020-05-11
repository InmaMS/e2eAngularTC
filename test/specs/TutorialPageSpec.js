"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialPage_1 = require("../pages/TutorialPage");
const HomePage_1 = require("../pages/HomePage");
const cucumber_1 = require("cucumber");
const protractor_config_1 = require("../protractor.config");
const chai_1 = require("chai");
var tutorialPage = new TutorialPage_1.TutorialPage();
var homePage = new HomePage_1.HomePage();
cucumber_1.Given(/^User starts Angular home page$/, async () => {
    await homePage.OpenBrowser(protractor_config_1.config.baseUrl);
});
cucumber_1.When(/^User select '([^"]*)' option from the main page$/, async (sectionName) => {
    let section = sectionName.split(':');
    if (section[0] === 'Learn')
        await homePage.clickOnLearnMenu();
    if (section[1] === 'Tutorial')
        await homePage.clickOnTutorialEntry();
});
cucumber_1.Then(/^The Tutorial Page is displayed$/, async () => {
    let isLoaded = await homePage.isHomePageLoaded();
    chai_1.expect(isLoaded, 'Main page is not loaded').to.equals(false);
});
