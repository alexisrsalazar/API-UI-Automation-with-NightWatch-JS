module.exports = {
    'Demo test unosquare' : function(browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
            .end();
    }
};

module.exports = {
    'Demo test unosquare' : function(browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
            .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
            .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
            .assert.containsText("li a[href = '/Services']", "SERVICES")
            .assert.cssProperty("li a[href = '/About']", 'display' , 'block')
            .assert.not.cssProperty("li a[href = '/About']", 'front-size' , '12px')
            .assert.valueContains('div h2[class="d-block w-100 text-uppercase subtitle"]', "Industry Expertise")
            browser.end();
    }
};

