const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_elements');
const Collection = require('../base_elements/base_collection');

class WatchLater extends BasePage {
    constructor() {
        super();
        this.chosen_videos_in_watch_later_list = new Collection('chosen_videos_in_watch_later_list','//a[@id="video-title"]');
        this.first_video_in_watch_later = new Element('first_video_in_watch_later','(//div[@id="container" and @class="style-scope ytd-playlist-video-renderer"])[1]');
    }
}


module.exports = WatchLater;