const { element, browser } = require("protractor");
const chai = require('chai');
const expect = chai.expect;

describe('guest youtube', function () {
    const watch_later_button_above_video = element(by.xpath('//ytd-thumbnail-overlay-toggle-button-renderer[@aria-label="Watch later"]'));
    
    beforeEach(async function () {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.youtube.com/');
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000);
    });

    it('add video to watch later as a guest', async function () {
        let video = element(by.xpath('(//div[@id="content"]/ytd-rich-grid-media/div[@id="dismissible"])[5]'));
        await browser.sleep(700);
        await browser.actions().mouseMove(video).perform();
        await watch_later_button_above_video.click();
        await browser.sleep(700);
        const signIn_popUp = await element(by.xpath('//div[@id="contentWrapper"]')).isDisplayed();
        expect(signIn_popUp).to.be.true
    });
});