module.exports = {
    'test nightwatch steps': function (browser) {
        var nightwatch = browser.page.landingpage();

        nightwatch
            .navigate()
            .assert.urlEquals('https://nightwatchjs.org/')
            .click('@getStarted')
            .sendKeys('@sideBarFilter', 'assert')
            .assert.enabled('@assertionsOption')
            .assert.visible('@blogHeader')
            .assert.titleEquals('What is Nightwatch? | Developer Guide | Nightwatch.js')
        browser.end();
    }

};