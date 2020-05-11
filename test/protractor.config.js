"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    specs: ["./features/*.feature"],
    capabilities: {
        browserName: "chrome",
        'chromeOptions': {
            'args': [
                '--no-sandbox',
                '--disable-gpu'
            ]
        }
    },
    baseUrl: "https://angularjs.org/",
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: ['./specs/*.js', './hooks/ScenarioHooks.js'],
        strict: true,
        'dry-run': false,
        compiler: [],
        format: 'json:results.json',
    },
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './results.json',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            },
            output: './report/cucumber_report.html',
        };
        reporter.generate(options);
    }
};
