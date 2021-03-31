const { element, browser } = require('protractor');
const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;


describe('youtube', function () {
    before(async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage('Home').open();
        await browser.driver.manage().window().maximize();
        await PageFactory.getPage('Home').wait(1500);
        await PageFactory.getPage('SignIn').signIn.click();
        await PageFactory.getPage('SignIn').wait(1500);
        await PageFactory.getPage('SignIn').eamil_input.sendKeys('yurialekseyevichgagarincosmos@gmail.com');
        await PageFactory.getPage('SignIn').wait(1500);
        await PageFactory.getPage('SignIn').next_button.click();
        await PageFactory.getPage('SignIn').wait(1500);
        await PageFactory.getPage('SignIn').pass_input.sendKeys('yurik123');
        await PageFactory.getPage('SignIn').wait(1500);
        await PageFactory.getPage('SignIn').next_button_pass.click();
        await PageFactory.getPage('Home').wait(3000);
    });

    beforeEach(async function () {
        await PageFactory.getPage('Home').open();
        await PageFactory.getPage('Home').wait(3000);
    });

    after(async function () {
        await PageFactory.getPage('Home').Header.youtube_icon.click();
        await PageFactory.getPage('Home').wait(700);
        await PageFactory.getPage('Home').button_of_watch_later.click();
        await PageFactory.getPage('Home').wait(200);
        const first_video_in_watch_later = element(by.xpath('(//div[@id="container" and @class="style-scope ytd-playlist-video-renderer"])[1]'));
        await browser.wait(EC.elementToBeClickable(first_video_in_watch_later), 5000);
        await browser.actions().mouseMove(first_video_in_watch_later).click().perform();            
        
        const chosen_videos_in_watch_later_list = element.all(by.xpath('//a[@id="video-title"]'));

        while((await chosen_videos_in_watch_later_list).length) {
            console.log(chosen_videos_in_watch_later_list.length);
            await PageFactory.getPage('WatchLater').wait(800);
            await browser.actions().mouseMove(element(by.xpath('(//img[@id="img" and @width="100"])[1]'))).mouseMove(element(by.xpath('//button[@aria-label="Delete"][1]'))).click().perform();
        }
        
    
        // delete all videos from watch_later
        // let a = PageFactory.getPage('WatchLater').chosen_videos_in_watch_later_list;
        // console.log(a.length);
        // console.log("111111111111111111111111111");

        // let chosen_videos_in_watch_later_list = element.all(by.xpath('//a[@id="video-title"]'));
        // console.log(chosen_videos_in_watch_later_list.length);
        
        // console.log("222222222222222222222222222222222");

        // let chosen_videos_in_watch_later_list1 = await element.all(by.xpath('//a[@id="video-title"]'));
        // console.log(chosen_videos_in_watch_later_list1.length);
    });

    it('check dark theme is visible', async function () {
        await PageFactory.getPage('Home').Header.avatar.click();
        await PageFactory.getPage('Home').wait(2000);
        await PageFactory.getPage('Avatar').dark_icon.click();
        await PageFactory.getPage('Avatar').wait(2000);
        await PageFactory.getPage('Avatar').dark_theme_button.click();
        await PageFactory.getPage('Avatar').wait(2000);
        const display_color_visible = await PageFactory.getPage('Avatar').Header.display_color.isDisplayed();
        expect(display_color_visible).to.be.true;
    }); 
    
    it('check username is visible', async function () {
        await PageFactory.getPage('Avatar').Header.avatar.click();
        await PageFactory.getPage('Avatar').wait(2000);
        const current_user_name = await PageFactory.getPage('Avatar').user_name.getText();
        expect(current_user_name).equal('Yuri Gagarin');
    }); 

    it('confirm that the list of captured videos has been changed after clicking youtube icon', async function () {
        const videosBeforClicking = await PageFactory.getPage('Home').section_videos.getTexts();
        await PageFactory.getPage('Home').wait(500);
        await PageFactory.getPage('Home').Header.youtube_icon.click();
        await PageFactory.getPage('Home').wait(1500);
        const videosAfterClicking = await PageFactory.getPage('Home').section_videos.getTexts();
    
        function arraysOfVideosEqual(before, after) {
            return JSON.stringify(before) == JSON.stringify(after);
        }

        expect(arraysOfVideosEqual(videosBeforClicking, videosAfterClicking)).to.equal(false);        
    });

    it('Add some videos to watch later, should check they were added', async function () {
        const list_of_name_added_videos = [];
        for(let i = 1; i < 5; i++) {   
            let video = element(by.xpath(`(//a[@id="video-title-link" and @class="yt-simple-endpoint style-scope ytd-rich-grid-media"])[${i}]`));
            
            // ?? let video = PageFactory.getPage('Home').section_videos.getElement(i); TypeError: location.getId is not a function
            
            await browser.actions().mouseMove(video).perform();      
            await PageFactory.getPage('Home').wait(500);
            await PageFactory.getPage('Home').watch_later_button_above_video.click();
            let video_name = await video.getText();
            await list_of_name_added_videos.unshift(video_name);
        }
        
        await PageFactory.getPage('Home').button_of_watch_later.click();
        await PageFactory.getPage('Home').wait(2000);
        const chosen_videos_name_in_watch_later_list = await PageFactory.getPage('WatchLater').chosen_videos_in_watch_later_list.getTexts();
        const a = JSON.stringify(chosen_videos_name_in_watch_later_list);
        // console.log(a);
        const b = JSON.stringify(list_of_name_added_videos);
        // console.log(b);
        browser.sleep(3000);
        expect(a == b).to.equal(true);
    });

    it('like video and check it was added', async function () {
        await PageFactory.getPage('Home').Header.youtube_icon.click();
        await PageFactory.getPage('Home').wait(2000);

        // ??TypeError: PageFactory.getPage(...).section_videos.get is not a function
        // ??const first_video_name = JSON.stringify(await PageFactory.getPage('Home').section_videos.get(0).getText());
        
        
        const first_video_name = JSON.stringify(await PageFactory.getPage('Home').first_video.getText());
        await PageFactory.getPage('Home').wait(3000);
        await PageFactory.getPage('Home').first_video.click();
        await PageFactory.getPage('Home').wait(3000);
        await PageFactory.getPage('Home').like.click();
        await PageFactory.getPage('Home').Header.youtube_icon.click();
        await PageFactory.getPage('Home').wait(2000);
        await PageFactory.getPage('Home').liked_video.click();
        await PageFactory.getPage('Home').wait(1500);        
        const first_video_name_in_liked_video = JSON.stringify(await PageFactory.getPage('LikedVideosPage').first_video_in_liked_videos.getText());
        expect(first_video_name == first_video_name_in_liked_video).to.equal(true);
    });
});

