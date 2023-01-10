module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
        getStarted :{
            selector: 'span a[href="https://nightwatchjs.org/guide/overview/what-is-nightwatch.html"]'
        },
        sideBarFilter: {
            selector: 'div input[id="sidebar-filter"]'
        },
        assertionsOption: {
            selector: 'li a[href="/guide/writing-tests/adding-assertions.html"]'
        },
        apiHeader: {
            selector: 'header.navigation1.navbar-expand-lg:nth-child(1) div.container div.navigation-content div.navigation-links.collapse.navbar-collapse:nth-child(2) div.nav-links-left div.nav-item:nth-child(2) a.regular16px.neutral-white-color.header-links span:nth-child(1)'
        },
        blogHeader: {
            selector: 'header.navigation1.navbar-expand-lg:nth-child(1) div.container div.navigation-content div.navigation-links.collapse.navbar-collapse:nth-child(2) div.nav-links-left div.nav-item:nth-child(4)  a.regular16px.neutral-white-color.header-links'
        },
        historyText: {
            selector: 'div p[class="address"]'
        }
    }


};