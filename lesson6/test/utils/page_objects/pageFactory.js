const Avatar = require('./avatar_page/avatar');
const HomePage = require('./home_page/home_page');
const SignIn = require('./sign_in_page/sign_in_page');
const WatchLater = require('./watchLater_page/watchLater_page');
const LikedVideosPage = require('./likedVideos_page/likedVideos_page');


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case 'Home':
                return new HomePage();
            case 'SignIn':
                return new SignIn();
            case 'Avatar':
                return new Avatar();
            case 'WatchLater':
                return new WatchLater();
            case 'LikedVideosPage':
                return new LikedVideosPage();
        }
    }
}

module.exports = PageFactory;