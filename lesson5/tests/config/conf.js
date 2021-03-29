const { browser } = require("protractor");
const yargs = require('yargs').argv; // "protractor -- --instances = 3"

exports.config = {
    framework: 'mocha',
    // directConnect: true, doesnt workkkkkkkkkkkkk,
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    specs: ['../spec/*.spec.js'],
    
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        'browserName': 'chrome',
        'goog:chromeOptions': {
            'w3c': false
        }
        // count: 2
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    },

    // onComplete : function () { DOESNT WORK
    //     browser.close();
    // },

    // onPrepare: function () {
    //     browser.waitForAngularEnabled(false); DOESNT WORK
    // }
};



