function getDataSearch() {
    return require('../../dataExternal/unosquareSearchData.json');
};

module.exports= {
    before: function (browser) {
    },

    'Flow: Url validation, Search Validation and names validations': async function (browser) {
        var unosquare = browser.page.mainpage();
        const file = getDataSearch();
        const names = file.search;
        console.log(names)
        unosquare
            .navigate()
            .goToBlog('@blogMenu')
            .assert.textEquals('@headerBlog', 'DIGITAL TRANSFORMATION BLOG')
            .assert.urlEquals('https://blog.unosquare.com/')
            .assert.visible('@recentPost')
            .assert.visible('@popularPost')
        for (var name of names) {
            unosquare
                .setValue('@searchBar', name)
                .click('@searchPostBtn')
        }
        unosquare
            .goToBlog('@aboutMenu')
            .assert.textEquals('@giancarlo', 'GIANCARLO DI VECE')
            .assert.textEquals('@mariodivece', 'MARIO DI VECE')
            .assert.textEquals('@eduardo', 'EDUARDO ARIAS')
            .assert.textEquals('@ignacio', 'IGNACIO MIRANDA')
            .assert.textEquals('@diego', 'DIEGO HUERTA')
    }


};