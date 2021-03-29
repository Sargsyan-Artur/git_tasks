const { element, browser } = require("protractor");
const chai = require('chai');
const expect = chai.expect;

describe('youtube', function () {
    // sign in elements
    const signIn = element(by.xpath('//ytd-button-renderer[@class = "style-scope ytd-masthead style-suggestive size-small"]'));
    const eamil_input = element(by.xpath('//input[@type="email"]'));
    const next_button = element(by.xpath('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]'));
    const pass_input = element(by.xpath('//input[@aria-label="Enter your password"]'));
    const nex_button_pass = element(by.xpath('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]'));
    //

    // avatar icon and menu elements
    const avatar = element(by.xpath('//img[contains(@alt, "Avatar image")]'));
    const dark_icon = element(by.xpath('//div[@class="content-icon style-scope ytd-toggle-theme-compact-link-renderer"]/yt-icon[@id="primary-icon"]'));
    const dark_theme__button = element(by.xpath('//paper-item[@role="link"]//yt-formatted-string[@id="label" and text()="Dark theme"]'));
    const account_name = element(by.id('account-name')); 
    //

    // youtube icon
    const youtube_icon = element(by.xpath('//ytd-topbar-logo-renderer[@id="logo"]/a/div//yt-icon[@id="logo-icon"]'));
    //

    // watch_later elements 
    const watch_later_button_above_video = element(by.xpath('//ytd-thumbnail-overlay-toggle-button-renderer[@aria-label="Watch later"]'));
    const button_of_watch_later = element(by.xpath('//yt-formatted-string[text()="Watch later"]'));
    const chosen_videos_in_watch_later_list = element.all(by.xpath('//a[@id="video-title"]'));
    //

    // like button and liked videos
    const first_video_in_liked_videos = element(by.xpath('(//a[@id="video-title" and @class="yt-simple-endpoint style-scope ytd-playlist-video-renderer"])[1]'));
    const liked_video = element(by.xpath('//yt-formatted-string[text()="Liked videos"]'));
    const like = element(by.xpath('//button[starts-with(@aria-label, "like this")]'));
    const first_video = element(by.xpath('(//yt-formatted-string[@id="video-title" and @class="style-scope ytd-rich-grid-media"])[1]'));
    
    before(async function () {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.youtube.com/');
        await browser.driver.manage().window().maximize();
        await browser.sleep(1500);
        await signIn.click();
        await browser.sleep(1500);
        await eamil_input.sendKeys('yurialekseyevichgagarincosmos@gmail.com');
        await browser.sleep(1500);
        await next_button.click();
        await browser.sleep(1500);
        await pass_input.sendKeys('yurik123');
        await browser.sleep(1500);
        await nex_button_pass.click();
        await browser.sleep(3000);
    });

    after(async function () {
        await button_of_watch_later.click();
        await browser.sleep(200);
        const first_video_in_watch_later = element(by.xpath('(//div[@id="container" and @class="style-scope ytd-playlist-video-renderer"])[1]'));
        await browser.actions().mouseMove(first_video_in_watch_later).click().perform();
        
        // delete all videos from watch_later
        while((await chosen_videos_in_watch_later_list).length) {
            await browser.sleep(700);
            await browser.actions().mouseMove(element(by.xpath('(//img[@id="img" and @width="100"])[1]'))).mouseMove(element(by.xpath('//button[@aria-label="Delete"][1]'))).click().perform();
        }
    });

    it('check dark theme is visible', async function () {
        await avatar.click();
        await browser.sleep(2000);
        await dark_icon.click();
        await browser.sleep(2000);
        await dark_theme__button.click();
        await browser.sleep(2000);
        const device_color = await element(by.xpath('//html[@dark="true"]')).isDisplayed();
        
        expect(device_color).to.be.true;
    }); 
    
    it('check username is visible', async function () {
        await avatar.click();
        await browser.sleep(2000);
        const current_user_name = await account_name.getText();
        expect(current_user_name).equal('Yuri Gagarin');
    }); 

    it('confirm that the list of captured videos has been changed', async function () {
        const videosBeforClicking = await element.all(by.id('video-title')).getText();
        await youtube_icon.click();
        await browser.sleep(1500);
        const videosAfterClicking = await element.all(by.id('video-title')).getText();
        
        function arraysOfVideosEqual(before, after) {
            console.log(JSON.stringify(before));
            console.log(JSON.stringify(after));
            return JSON.stringify(before) == JSON.stringify(after);
        }

        expect(arraysOfVideosEqual(videosBeforClicking, videosAfterClicking)).to.equal(false);        
    });

    it('Add some videos to watch later, should check they were added', async function () {
        await browser.sleep(1000);
        const list_of_name_added_videos = [];
        for(let i = 1; i < 5; i++) {   
            let video = element(by.xpath(`(//yt-formatted-string[@id="video-title"])[${i}]`));
            await browser.actions().mouseMove(video).perform();
            await watch_later_button_above_video.click();
            let video_name = await video.getText();
            await list_of_name_added_videos.unshift(video_name);
        }
        
        await button_of_watch_later.click();
        await browser.sleep(2000);
        const chosen_videos_name_in_watch_later_list = await chosen_videos_in_watch_later_list.getText();
        console.log(chosen_videos_name_in_watch_later_list);

        const a = JSON.stringify(chosen_videos_name_in_watch_later_list);
        console.log(a);
        const b = JSON.stringify(list_of_name_added_videos);
        console.log(b);
        
        expect(a == b).to.equal(true);
    });

    it('like list and check they were added', async function () {
        await youtube_icon.click();
        const first_video_name = JSON.stringify(await first_video.getText());
        console.log(first_video_name);
        await browser.sleep(6000);
        await first_video.click();
        await browser.sleep(3000);
        await like.click();
        
        await youtube_icon.click();
        await browser.sleep(2000);
        await liked_video.click();
        await liked_video.click();
        await browser.sleep(1500);
        
        const first_video_name_in_liked_video = JSON.stringify(await first_video_in_liked_videos.getText());
        console.log(first_video_name_in_liked_video);
        expect(first_video_name == first_video_name_in_liked_video).to.equal(true);
    });
});

