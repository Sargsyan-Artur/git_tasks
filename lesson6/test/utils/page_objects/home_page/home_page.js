const Collection = require('../base_elements/base_collection');
const Element = require('../base_elements/base_elements');
const BasePage = require('../base_page/base_page');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/';
        this.section_videos = new Collection('section_videos', '//a[@id="video-title-link"]');
        this.watch_later_button_above_video = new Element('watch_later_button_above_video', '//ytd-thumbnail-overlay-toggle-button-renderer[@aria-label="Watch later"]');
        this.button_of_watch_later = new Element('button_of_watch_later', '//yt-formatted-string[text()="Watch later"]');
        this.like = new Element('like', '//button[starts-with(@aria-label, "like this")]');
        this.liked_video = new Element('liked_video', '//yt-formatted-string[text()="Liked videos"]');
        this.first_video = new Element('first_video','(//yt-formatted-string[@id="video-title" and @class="style-scope ytd-rich-grid-media"])[1]');


    }
    open() {
        return super.open(this.url);
    }
}

module.exports = HomePage;