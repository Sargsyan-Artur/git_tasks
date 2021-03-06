const { SpecReporter } = require('jasmine-spec-reporter');
const yargs = require('yargs').argv;


exports.config = {
    directConnect: true,
    //specs: ['./test/*.js'],
    specs: ['spec.js'],

    // capabilities: {
    //     shardTestFiles: yargs.instances > 1,
    //     maxInstances: yargs.instances || 1,
    //     'browserName': 'chrome',
    //     'goog:chromeOptions': {
    //         'w3c': false
    //     }

    //     //count: 2
    // },

    multiCapabilities: [{
        
        'browserName': 'chrome'
    }, {
        'browserName': 'chrome'
    }],

    onPrepare: function () {
        //console logs configurations
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
            displaySuccessesSummary: false, // display summary of all successes after execution 
            displayFailuresSummary: true,   // display summary of all failures after execution 
            displayPendingSummary: true,    // display summary of all pending specs after execution 
            displaySuccessfulSpec: true,    // display each successful spec 
            displayFailedSpec: true,        // display each failed spec 
            displayPendingSpec: false,      // display each pending spec 
            displaySpecDuration: false,     // display each spec duration 
            displaySuiteNumber: false,      // display each suite number (hierarchical) 
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));
    },
    
    onComplete : function () {
        browser.close();
    }
};

