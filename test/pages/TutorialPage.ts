import { element, protractor, by, browser } from 'protractor';

export class TutorialPage {
    tutorialTree = element(by.className("navClass(navGroup)"));

    IsTutorialPresent = async () => {
        if (this.tutorialTree.isPresent())
            return true;
        return false;
    }
}