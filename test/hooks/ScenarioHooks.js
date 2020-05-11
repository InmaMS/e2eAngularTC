"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.setDefaultTimeout(50000);
// BeforeAll(async() => {
//     var jsonDir = process.cwd() + "/reports/json";
//     CucumberReportExtension.CreateReportFile(jsonDir);
// })
cucumber_1.After(async function (Scenario) {
    if (Scenario.result.status === cucumber_1.Status.FAILED) {
        const screenShot = await protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
