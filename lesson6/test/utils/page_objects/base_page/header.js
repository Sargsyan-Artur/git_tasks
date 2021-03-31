const Collection = require('../base_elements/base_collection');
const Element = require('../base_elements/base_elements');

class Header {
    constructor() {
        this.avatar = new Element('Avatar',' //img[contains(@alt, "Avatar image")]');
        this.youtube_icon = new Element('Youtube', '//ytd-topbar-logo-renderer[@id="logo"]/a/div//yt-icon[@id="logo-icon"]');
        this.display_color = new Element('display_color', '//html[@dark="true"]');
    }
}

module.exports = Header;