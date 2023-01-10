module.exports = {
    'test unosquare contactUs' : function(browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .waitForElementVisible('body')
            .click("@contactusMenu")
            .assert.textEquals('@headerContactUsText', "LET'S COLLABORATE")
            .assert.not.attributeContains('@headerContactUsText', 'id', 'hero')
        browser.end();
    },

    'test unosquare V2' : function(browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .waitForElementVisible('body')
            .click("@aboutMenu")
            .assert.urlEquals('https://www.unosquare.com/About')
            .verify.cssProperty("@aboutMenu", 'font-size', '12px') // This assert is going to fail
        browser.end();
    },

    'test unosquare v3' : function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .waitForElementVisible('body')
            .click("@industriesMenu")
            .assert.not.cssProperty('@dateInIndustries', 'xpath', 7)
            .assert.titleEquals('Digital Transformation Across Industries | Technology Consulting Cases')


    }
};