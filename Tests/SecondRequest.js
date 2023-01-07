module.exports = {
    'Demo test unosquare' : function(browser) {
        browser
            .windowMaximize()
            .url('https://nightwatchjs.org/')
            .waitForElementVisible('body')
            .click('span a[href="https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html"]')
            .assert.titleEquals('Getting Started | Developer Guide | Nightwatch.js')
            .sendKeys('div input[id="sidebar-filter"]', 'Asserts')
            .click('li a[href="/guide/writing-tests/adding-assertions.html"]')
            .verify.visible('header.navigation1.navbar-expand-lg:nth-child(1) div.container div.navigation-content div.navigation-links.collapse.navbar-collapse:nth-child(2) div.nav-links-left div.nav-item:nth-child(2) a.regular16px.neutral-white-color.header-links span:nth-child(1)')
            .click('header.navigation1.navbar-expand-lg:nth-child(1) div.container div.navigation-content div.navigation-links.collapse.navbar-collapse:nth-child(2) div.nav-links-left div.nav-item:nth-child(4)  a.regular16px.neutral-white-color.header-links')
            .assert.textEquals('div p[class="address"]', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.')
            .assert.urlEquals('https://nightwatchjs.org/blog/')
            .end();
    }
};