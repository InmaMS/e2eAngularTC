"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.main = protractor_1.element(protractor_1.by.id("navbar-main"));
        this.yourNameTxtField = protractor_1.element(protractor_1.by.model("yourName"));
        this.greetingsField = protractor_1.element(protractor_1.by.css("h1.ng-binding"));
        this.learnMenu = protractor_1.element(protractor_1.by.css("li.dropdown:nth-child(1) > a:nth-child(1)"));
        this.TutorialEntry = protractor_1.element(protractor_1.by.linkText('Tutorial'));
        this.OpenBrowser = async (url) => {
            await protractor_1.browser.get(url);
            protractor_1.browser.sleep(2000);
        };
        this.DeleteDataFromYourNameField = async () => {
            this.yourNameTxtField.clear();
        };
        this.isHomePageLoaded = async () => {
            protractor_1.browser.sleep(2000);
            if (this.main.isPresent())
                return true;
            return false;
        };
        this.clickOnLearnMenu = async () => {
            this.learnMenu.click();
        };
        this.clickOnTutorialEntry = async () => {
            this.TutorialEntry.click();
        };
    }
    FillYourName(yourName) {
        this.yourNameTxtField.sendKeys(yourName);
    }
    GetGreetings() {
        return this.greetingsField.getText();
    }
}
exports.HomePage = HomePage;
