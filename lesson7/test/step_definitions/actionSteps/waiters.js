"use strict";
let { When, Then } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js')

const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (present|clickable|visible|invisible|selected|gone)$/, (alias, shouldBe) => {
    let element = elementHelper(alias);
    let expectedConditionFunction = stepFunctions.expectedCondition(shouldBe);
    return browser.wait(expectedConditionFunction(element), 10000);
});

Then(/^I enter log "([^"]*)" in "([^"]*)"$/, (sendKeysText, inputName) => {
    let inputElement = elementHelper(inputName);
    let sendKeys = stepFunctions.sendKeys(sendKeysText, inputElement)
    return sendKeys
})

Then(/^I enter pass "([^"]*)" in "([^"]*)"$/, (sendKeysText, inputName) => {
    let inputElement = elementHelper(inputName);
    let sendKeys = stepFunctions.sendKeys(sendKeysText, inputElement)
    return sendKeys
})




