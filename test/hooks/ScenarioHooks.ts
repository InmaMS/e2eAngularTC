import { BeforeAll, AfterAll, After, Status, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";

setDefaultTimeout(50000);

// BeforeAll(async() => {
//     var jsonDir = process.cwd() + "/reports/json";
//     CucumberReportExtension.CreateReportFile(jsonDir);
// })

After(async function (Scenario) {
    if (Scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png")
    }
})
