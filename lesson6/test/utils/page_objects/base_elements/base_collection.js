class Collection {
    constructor(elementName, xpath) {
        this.elementName = elementName;
        this.collection = element.all(by.xpath(xpath));
    }

    async getElement(index) {
        const get_element_by_index = await this.collection.get(index);
        
        return get_element_by_index;
    }

    // async length() {
    //     const collectionLength = await this.collection.count();

    //     return collectionLength.length;
    // }
    async getCount() {
        const collectionCount = await this.collection.count();
        
        return collectionCount;
    }

    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        
        return arrayOfCollectionTexts;
    }

    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick); 
        
        if(elementToClickIndex === -1) {
            throw new Error(`no element with ${textToClick} text found`);
        }

        return this.collection.get(textToClick).click();
    }
}

module.exports = Collection;
