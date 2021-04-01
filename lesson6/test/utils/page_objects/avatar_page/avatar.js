const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_elements');

class Avatar extends BasePage {
    constructor() {
        super();
        this.dark_icon = new Element('dark_icon', '//div[@class="content-icon style-scope ytd-toggle-theme-compact-link-renderer"]/yt-icon[@id="primary-icon"]');
        this.dark_theme_button = new Element('dark_theme_button', '//yt-formatted-string[@id="label" and text()="Dark theme"]');
        this.user_name = new Element('user_name', '//yt-formatted-string[@id="account-name"]');
    }
}


module.exports = Avatar;