const { element, browser } = require("protractor");
const chai = require('chai');
const expect = chai.expect;

describe('guest youtube', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.youtube.com/');
    browser.driver.manage().window().maximize();

    it('add video to watch later as a guest', async function () {
        let video = element(by.xpath('(//div[@id="content"]/ytd-rich-grid-media/div[@id="dismissible"])[5]'));
        await browser.sleep(4000);
        await browser.actions().mouseMove(video).perform();
        const watch_later_button_above_video = element(by.xpath('//ytd-thumbnail-overlay-toggle-button-renderer[@aria-label="Watch later"]'));
        await watch_later_button_above_video.click();
        await browser.sleep(3000);
        const signIn_popUp = await element(by.xpath('//div[@id="contentWrapper"]')).isDisplayed();
        expect(signIn_popUp).to.be.true
    });
});