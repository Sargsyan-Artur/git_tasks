"use strict";
//const stepFunctions = require('./utils/stepFunctions.js');
const elementHelper = require('./utils/stepFunctions.js').getPageObjectElement;


const {Before, After, Status, setDefaultTimeout} = require('cucumber');
const { protractor } = require('protractor/built/ptor');
const EC = protractor.ExpectedConditions;

setDefaultTimeout(60 * 1000);

Before("@login", async function () {
    browser.waitForAngularEnabled(false);
    await browser.get('https://www.youtube.com/');
    await browser.driver.manage().window().maximize();
    await browser.sleep(1500);
    elementHelper("signIn").click();
    await browser.sleep(1500);
    elementHelper('eamil_input').sendKeys('yurialekseyevichgagarincosmos@gmail.com');
    await browser.sleep(1500);
    elementHelper("next_button").click();
    await browser.sleep(1500);
    elementHelper('pass_input').sendKeys('yurik123')
    await browser.sleep(1500);
    elementHelper("nex_button_pass").click();

    await browser.sleep(3000);
    
});

// After("@DeleteWatchLaterVideos", async function () {
//     await elementHelper("button_of_watch_later").click();
//     await browser.sleep(500);
//     // const first_video_in_watch_later = element(by.xpath('(//div[@id="container" and @class="style-scope ytd-playlist-video-renderer"])[1]'));
//     const first_video_in_watch_later = elementHelper("first_video_in_watch_later");
//     EC.elementToBeClickable.bind(first_video_in_watch_later)
//     first_video_in_watch_later.click()
//     //await browser.actions().mouseMove(first_video_in_watch_later).click().perform();
    
//     // delete all videos from watch_later
//     while((await chosen_videos_in_watch_later_list).length) {
//         await browser.sleep(800);
//         await browser.actions().mouseMove(element(by.xpath('(//img[@id="img" and @width="100"])[1]'))).mouseMove(element(by.xpath('//button[@aria-label="Delete"][1]'))).click().perform();
//     }
// })

            // After(function (testCase) {
//     if (testCase.result.status === Status.FAILED) {
//         return browser.takeScreenshot().then((screenShot) => {
//             let decodedImage = new Buffer(screenShot, 'base64');    
//             return this.attach(decodedImage, 'image/png');
//         });
//     }
// });