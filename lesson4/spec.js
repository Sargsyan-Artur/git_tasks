// spec.js
describe('Angular app', function () {
    it('should open browser with 1800x600 resolution', function () {
        browser.get('https://angular.io/');
        browser.driver.manage().window().setSize(1800, 600);
        expect(browser.getTitle()).toEqual('Angular');
    });

    it('should search what is angular', function () {
        element(by.css('[aria-label="search"]')).sendKeys('What is Angular');
        browser.driver.sleep(2000);
        const elem = element(by.xpath('//div[@class="search-area ng-star-inserted"]//span[text()="ng doc"]'));
        expect(elem.isDisplayed());
    });

    it('should select "ng doc" element', function () {
        const elem_ng_doc = element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        elem_ng_doc.click();
        browser.driver.sleep(2000);
    });

    it('Check visibility of header “ng doc”', function () {
        const elem_header = element(by.css('article header'));
        expect(elem_header.isDisplayed());
    });

    it('Check visibility  “Arguments” of  “ng doc” page', function () {
        const elem_arguments = element(by.xpath('//aio-lazy-ce/aio-toc/div/ul/li[2]/a'));
        expect(elem_arguments.isDisplayed());
    });

    it('Check visibility  “Options” of  “ng doc” page', function () {
        const elem_options = element(by.xpath('//aio-lazy-ce/aio-toc/div/ul/li[3]/a'));
        expect(elem_options.isDisplayed());
    });
    
    it('Click on Introduction from left side bar ', async function () {
        const elem_options = element(by.xpath('//aio-nav-item/div[1]/a[@href="docs"]'));
        await elem_options.click();
        const angular_box = element(by.xpath('//a[@href = "guide/what-is-angular"]/section[text()="What is Angular"]'));
        expect(angular_box.isDisplayed());
    });
});