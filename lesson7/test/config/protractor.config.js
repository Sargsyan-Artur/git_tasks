const path = require('path');
const yargs = require('yargs').argv;

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    specs: [path.resolve('./test/features/*.feature')],
    framework: 'custom',
    
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,    
    directConnect: true,    
    cucumberOpts: {
        require: ['../step_definitions/**/*.js'],
        // ignoreUncaughtExceptions: true,
        format: ['./node_modules/cucumber-pretty'],
        //tags: yargs.tag || '@epam'
    },
    onPrepare: () => {
        //logger.info('Maximizing browser window');
        browser.waitForAngularEnabled(false);
        return browser.manage().window().setSize(1000, 800);
    },
    // afterLaunch: () => {
    //     return reporter.generate(reporterOptions);
    // }
};
