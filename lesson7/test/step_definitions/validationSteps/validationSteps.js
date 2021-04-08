"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js');
const EC = protractor.ExpectedConditions;
const clickable = stepFunctions.expectedCondition("clickable")

Then(/^I should see black device_color$/, async () => {
    let device_color_elem = await elementHelper("device_color").isDisplayed()
    return expect(device_color_elem).to.be.true;
});

Then(/I should see maximize window$/, async () => {
    return await browser.driver.manage().window().maximize();
});

Then(/^I should see changed videos after updating$/, async () => {
    let videosBeforClicking = await elementHelper("videos").getText();
    elementHelper('youtube_icon').click();
    browser.sleep(2000);
    let videosAfterClicking = await elementHelper('videos').getText();    
    
    function arraysOfVideosEqual(before, after) {
        return JSON.stringify(before) == JSON.stringify(after);
    }

    return expect(arraysOfVideosEqual(videosBeforClicking, videosAfterClicking)).to.equal(false);   
})

When(/^I add "([^"]*)" videos to watch later then i sould see them in watch later$/,async (countOfvideos) => {
    const list_of_name_added_videos = [];
    countOfvideos = +countOfvideos + 1
    
    for(let i = 1; i < countOfvideos; i++) {   
        let video = element(by.xpath(`(//a[@id="video-title-link" and @class="yt-simple-endpoint style-scope ytd-rich-grid-media"])[${i}]`));
        await browser.actions().mouseMove(video).perform();
        await browser.sleep(500);
        elementHelper("watch_later_button_above_video").click();
        let video_name = await video.getText();
        await list_of_name_added_videos.unshift(video_name);
    }

    await elementHelper("button_of_watch_later").click();
    await browser.sleep(2000);
    const chosen_videos_name_in_watch_later_list = await elementHelper("chosen_videos_in_watch_later_list").getText();
    const a = JSON.stringify(chosen_videos_name_in_watch_later_list);
    const b = JSON.stringify(list_of_name_added_videos);
    return expect(a == b).to.equal(true);
})

When(/^I like first video then i should see in liked videos$/, async () => {
    const first_video_name = JSON.stringify(await elementHelper("first_video").getText());
    clickable(elementHelper("first_video"));
    await elementHelper("first_video").click();
    await browser.sleep(3000);
    clickable(elementHelper("like"));
    await elementHelper("like").click();
    clickable(elementHelper("youtube_icon"));
    await elementHelper("youtube_icon").click();
    await browser.sleep(2000);
    clickable(elementHelper("liked_video"));
    await elementHelper("liked_video").click();
    await browser.sleep(1500);
    const first_video_name_in_liked_video = JSON.stringify(await elementHelper("first_video_in_liked_videos").getText());
    return expect(first_video_name == first_video_name_in_liked_video).to.equal(true);
})

When(/^I finished test i should delete added videos$/, async () => {
    await elementHelper("button_of_watch_later").click();
    await browser.sleep(500);
    const first_video_in_watch_later = elementHelper("first_video_in_watch_later");
    EC.elementToBeClickable.bind(first_video_in_watch_later)
    first_video_in_watch_later.click()
    
    // delete all videos from watch_later
    while((await elementHelper('chosen_videos_in_watch_later_list')).length) {
        await browser.sleep(800);
        await browser.actions().mouseMove(element(by.xpath('(//img[@id="img" and @width="100"])[1]'))).mouseMove(element(by.xpath('//button[@aria-label="Delete"][1]'))).click().perform();
    }
    expect(await elementHelper('chosen_videos_in_watch_later_list').length).equal(undefined)
})

// Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
//     notArg = notArg ? ' not' : '';
//     let element = elementHelper(alias);
//     let result = await element.isPresent();
//     return expect(result).to.be.equal(!notArg);
// });

// Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
//     notArg = notArg ? ' not' : '';
//     let element = elementHelper(alias);
//     let result = await element.count();
//     expectedNumber = parseInt(expectedNumber);
//     if (notArg) {
//         return expect(result).to.not.equal(expectedNumber);   
//     }
//     else {
//         return expect(result).to.equal(expectedNumber);
//     }
// });

// Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
//     notArg = notArg ? ' not' : '';
//     let element = elementHelper(alias);
//     let elementText = await element.getText();
//     return expect(elementText.indexOf(textToContain)).to.not.equal(-1);    
// });

// Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {  //an example of poor error messages on failure
//     let pageTitle = await browser.getTitle();
//     let result = (pageTitle === text);
//     return expect(result).to.be.equal(!notArg);    
// });

// Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
//     notArg = notArg ? ' not' : '';
//     let pageTitle = await browser.getTitle();
//     if (notArg){
//         return expect(pageTitle).to.not.equal(text);
//     }
//     else {
//         return expect(pageTitle).to.be.equal(text);
//     }  
// });


