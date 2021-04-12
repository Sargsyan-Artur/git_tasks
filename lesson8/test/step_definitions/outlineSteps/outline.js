"use strict";
const {Given, Then, When } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
const expect = chai.expect;

const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given(/^I open "([^"]*)"$/, async (url) => {
    await browser.get(url);
    await browser.sleep(7000);
})

When(/^I put "([^"]*)" in search input$/,async (video_name) => {
    const searchInput = elementHelper("searchInput");
    await browser.sleep(3000);
    //await console.log("asd");
    await searchInput.sendKeys(video_name);
    //await console.log("dsa");
    const searchButton = elementHelper("search_button");
    await browser.sleep(2000);
    await searchButton.click();
    await browser.sleep(3000);
    const search_filters = await elementHelper("search_filters").isDisplayed();
    expect(search_filters).to.be.true
})