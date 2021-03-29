exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/*.spec.js'],
}

// exports.confing = {
//     directConnect: true,
//     spec: ['youtube.spec.js'],
   
//     capabilities: {
//         browserName: 'firefox'
//       },

//     onComplete : function () {
//         browser.close();
//     }
// }

