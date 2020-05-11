import { element, protractor, by, browser } from 'protractor';

export class HomePage {
    main = element(by.id("navbar-main"));
    yourNameTxtField = element(by.model("yourName"));
    greetingsField = element(by.css("h1.ng-binding"));
    learnMenu = element(by.css("li.dropdown:nth-child(1) > a:nth-child(1)"));
    TutorialEntry = element(by.linkText('Tutorial'));


    OpenBrowser = async (url: string) => {
        await browser.get(url);
        browser.sleep(2000);
    }

    FillYourName(yourName : string) {
        this.yourNameTxtField.sendKeys(yourName);
    }

    DeleteDataFromYourNameField = async() => {
        this.yourNameTxtField.clear();
    }

    GetGreetings() {
        return this.greetingsField.getText();
    }

    isHomePageLoaded = async() => {
        browser.sleep(2000);
        if (this.main.isPresent())
            return true;
        return false;
    }

    clickOnLearnMenu = async () => {
        this.learnMenu.click();
    }
    clickOnTutorialEntry = async () =>  {
        this.TutorialEntry.click();
    }
}