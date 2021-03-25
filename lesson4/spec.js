// spec.js
describe('Angular app', function () {
    const searchInput = element(by.css('[aria-label="search"]'));
    
    
    beforeEach(function () {
        browser.get('https://angular.io/');
        browser.driver.manage().window().setSize(1800, 600);
    });

    it('should open browser with 1800x600 resolution', function () {
        expect(browser.getTitle()).toEqual('Angular');
    });

    it('should search what is angular', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        // FAILED whyyyyyyyyyyyyyyyyyyyyyyyyyyyy   
        const ngDocIsVisibility = await element(by.xpath('//aio-search-results/div/div[2]/ul[1]/li[3]/a')).isDisplayed();
        expect(ngDocIsVisibility).toBe(true);
    });

    it('should select "ng doc" element', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        const butoon_ng_doc = await element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        butoon_ng_doc.click();
    });

    it('Check visibility of header “ng doc”', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        const butoon_ng_doc = await element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        await butoon_ng_doc.click();
        await browser.driver.sleep(1000);
        const elem_header = await element(by.css('article header')).isDisplayed();
        expect(elem_header).toBe(true);
    });

    it('Check visibility  “Arguments” of  “ng doc” page', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        const butoon_ng_doc = await element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        await butoon_ng_doc.click();
        browser.driver.sleep(1000);
        const elem_arguments = await element(by.xpath('//aio-lazy-ce/aio-toc/div/ul/li[2]/a')).isDisplayed();
        expect(elem_arguments).toBe(true);
    });

    it('Check visibility  “Options” of  “ng doc” page', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        const butoon_ng_doc = await element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        await butoon_ng_doc.click();
        await browser.driver.sleep(1000);
        const elem_options = await element(by.xpath('//aio-lazy-ce/aio-toc/div/ul/li[3]/a')).isDisplayed();
        expect(elem_options).toBe(true);
    });
    
    it('Click on Introduction from left side bar ', async function () {
        await searchInput.sendKeys('What is Angular');
        await browser.driver.sleep(2000);
        const butoon_ng_doc = await element(by.xpath('//div[@class="search-area ng-star-inserted"]//a[@href = "cli/doc"]'));
        await butoon_ng_doc.click();
        await browser.driver.sleep(1000);
        const elem_options = await element(by.xpath('//aio-nav-item/div[1]/a[@href="docs"]'));
        await elem_options.click();
        const angular_box = await element(by.xpath('//a[@href = "guide/what-is-angular"]/section[text()="What is Angular"]')).isDisplayed();
        expect(angular_box).toBe(true);
    });
});