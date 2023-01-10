module.exports = {
    'Demo test unosquare': function (browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
            .assert.visible('a img[src="/assets/logos/unosquare_logo.svg"]')
            .assert.titleEquals('Digital Transformation Services | Agile Staffing Solutions | Unosquare')
            .assert.urlContains("unosquare")
            .assert.urlEquals('https://www.unosquare.com/')
            .end();


    }

}