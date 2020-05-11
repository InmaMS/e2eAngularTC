import { HomePage } from "../pages/HomePage";
import { Given, When, Then } from "cucumber";
import { config } from "../protractor.config";
import { expect } from "chai";

var homePage = new HomePage();

Given(/^User navigates to Angular home page$/, async () => {
    await homePage.OpenBrowser(config.baseUrl as string);
});

When(/^User introduces '([^"]*)' in the greeting field$/, async(name) => {
    homePage.FillYourName(name);
});

When(/^User deletes data from the greeting field$/, async () => {
    await homePage.DeleteDataFromYourNameField();
})

Then(/^Field display: Hello '([^"]*)'$/, async(name) => {
    let greetings = await homePage.GetGreetings();
    expect(greetings, 'Greetings field is not correct').to.equals('Hello ' + name + "!");
})

Then(/^No name is displayed in the greeting field$/, async() => {
    let greetings = await homePage.GetGreetings();
    expect(greetings, 'Greetings field is not correct').to.equals('Hello !');
})

Then(/^Home Page is displayed$/, async() => {
    let isLoaded = await homePage.isHomePageLoaded();
    expect(isLoaded, 'Main page is not loaded').to.equals(true);
})