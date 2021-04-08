"use strict";
//const stepFunctions = require('./utils/stepFunctions.js');
const elementHelper = require('./utils/stepFunctions.js').getPageObjectElement;

const {Before, After, Status, setDefaultTimeout} = require('cucumber');
const { protractor } = require('protractor/built/ptor');
setDefaultTimeout(60 * 1000);

// Before("login", async function () {
//     browser.waitForAngularEnabled(false);
//     await browser.get('https://www.youtube.com/');
//     await browser.driver.manage().window().maximize();
//     await browser.sleep(1500);
//     elementHelper("signIn").click();
//     //await signIn.click();
//     await browser.sleep(1500);
//     elementHelper('eamil_input').sendKeys('yurialekseyevichgagarincosmos@gmail.com')
    
    
//     await browser.sleep(1500);
//     //await next_button.click();
//     elementHelper("next_button").click();
//     await browser.sleep(1500);
//     //await pass_input.sendKeys('yurik123');
//     //stepFunctions.sendKeys('yurik123', 'pass_input')
//     elementHelper('pass_input').sendKeys('yurik123')
//     await browser.sleep(1500);
//     //await nex_button_pass.click();
//     elementHelper("nex_button_pass").click();

//     await browser.sleep(3000);
    
// });


// After(function (testCase) {
//     if (testCase.result.status === Status.FAILED) {
//         return browser.takeScreenshot().then((screenShot) => {
//             let decodedImage = new Buffer(screenShot, 'base64');    
//             return this.attach(decodedImage, 'image/png');
//         });
//     }
// });