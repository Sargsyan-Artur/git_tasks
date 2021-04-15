class Element {
    constructor(elementName, xpath) {
        this.elementName = elementName;
        this.element = element(by.xpath(xpath));
    }

    getElement() {
        return this.element;
    }
    

    isDisplayed() {
        return this.element.isDisplayed();
    }

    click() {
        return this.element.click();
    }

    sendKeys(input) {
        return this.element.sendKeys(input);
    }

    

    async getText() {
        const elementText = await this.element.getText();

        return elementText;
    }
}

module.exports = Element;