"use strict";
const { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;

When(/^I click "([^"]*)"$/, (alias) => {
    return elementHelper(alias).click();
});