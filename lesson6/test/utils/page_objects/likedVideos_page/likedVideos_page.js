const Element = require('../base_elements/base_elements');
const BasePage = require('../base_page/base_page');

class LikedVideosPage extends BasePage {
    constructor() {
        super();
        this.first_video_in_liked_videos = new Element('first_video_in_liked_videos', '(//a[@id="video-title" and @class="yt-simple-endpoint style-scope ytd-playlist-video-renderer"])[1]');
        this.liked_video = new Element('liked_video', '//yt-formatted-string[text()="Liked videos"]');
    }
}

module.exports = LikedVideosPage;