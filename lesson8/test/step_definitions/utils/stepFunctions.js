const youtubePO = require('../../po/pageObject.json');

let getPageObjectElement = (alias) => {
    let pageElement = youtubePO[alias];
    if (pageElement['isCollection'] === true) {
        pageElement = element.all(by.xpath(pageElement.xpath));
        return pageElement;
    }
    else {
        pageElement = element(by.xpath(pageElement.xpath));
        return pageElement;
    }
};

module.exports = {
    getPageObjectElement
}