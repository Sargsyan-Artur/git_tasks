const { element, browser } = require("protractor");
const chai = require('chai');
const expect = chai.expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const { array } = require("yargs");

describe('guest youtube', function () {
    beforeEach(async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage('Home').open();
        await browser.driver.manage().window().maximize();
        await PageFactory.getPage('Home').wait(700);
    });

    it('add video to watch later as a guest', async function () {
        const first_video = PageFactory.getPage('Home').first_video.getElement();
        await PageFactory.getPage('Home').wait(700);
        await browser.actions().mouseMove(first_video).perform();
        await PageFactory.getPage('Home').watch_later_button_above_video.click();
        await PageFactory.getPage('Home').wait(700);
        const signIn_popUp = await element(by.xpath('//div[@id="contentWrapper"]')).isDisplayed();
        expect(signIn_popUp).to.be.true;
    });
});