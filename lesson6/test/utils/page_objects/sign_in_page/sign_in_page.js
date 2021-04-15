const Element = require('../base_elements/base_elements');
const BasePage = require('../base_page/base_page');

class SignIn extends BasePage {
    constructor() {
        super();
        this.signIn = new Element('SignIn', '//ytd-button-renderer[@class = "style-scope ytd-masthead style-suggestive size-small"]');
        this.eamil_input = new Element('eamil_input', '//input[@type="email"]');
        this.next_button = new Element('next_button', '//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]');
        this.pass_input = new Element('pass_input', '//input[@aria-label="Enter your password"]');
        this.next_button_pass = new Element('next_button_pass', '//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]');
    }
}

module.exports = SignIn;