"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class TutorialPage {
    constructor() {
        this.tutorialTree = protractor_1.element(protractor_1.by.className("navClass(navGroup)"));
        this.IsTutorialPresent = async () => {
            if (this.tutorialTree.isPresent())
                return true;
            return false;
        };
    }
}
exports.TutorialPage = TutorialPage;
