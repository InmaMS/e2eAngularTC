"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pages/HomePage");
const cucumber_1 = require("cucumber");
const protractor_config_1 = require("../protractor.config");
const chai_1 = require("chai");
var homePage = new HomePage_1.HomePage();
cucumber_1.Given(/^User navigates to Angular home page$/, async () => {
    await homePage.OpenBrowser(protractor_config_1.config.baseUrl);
});
cucumber_1.When(/^User introduces '([^"]*)' in the greeting field$/, async (name) => {
    homePage.FillYourName(name);
});
cucumber_1.When(/^User deletes data from the greeting field$/, async () => {
    await homePage.DeleteDataFromYourNameField();
});
cucumber_1.Then(/^Field display: Hello '([^"]*)'$/, async (name) => {
    let greetings = await homePage.GetGreetings();
    chai_1.expect(greetings, 'Greetings field is not correct').to.equals('Hello ' + name + "!");
});
cucumber_1.Then(/^No name is displayed in the greeting field$/, async () => {
    let greetings = await homePage.GetGreetings();
    chai_1.expect(greetings, 'Greetings field is not correct').to.equals('Hello !');
});
cucumber_1.Then(/^Home Page is displayed$/, async () => {
    let isLoaded = await homePage.isHomePageLoaded();
    chai_1.expect(isLoaded, 'Main page is not loaded').to.equals(true);
});
