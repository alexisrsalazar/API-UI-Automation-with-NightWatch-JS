module.exports = {
    'Demo test unosquare' : function(browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
            .verify.visible('a img[src="/assets/logos/unosquare_logo.svg"]')
            .url('https://www.google.com')
            .assert.titleEquals('Google')
            .url('https://www.amazon.com')
            .end();
    }
};