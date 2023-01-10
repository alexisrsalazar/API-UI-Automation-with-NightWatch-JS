module.exports = {
    url: 'https://www.unosquare.com',
    elements: {
        contactusMenu: {
            selector: "li a[href = '/ContactUs']"
        },
        industriesMenu: {
            selector: "li a[href = '/Industries']"
        },
        aboutMenu: {
            selector: "li a[href = '/About']"
        },
        servicesMenu: {
            selector: "li a[href = '/Services']"
        },
        logoUnosquare: {
            selector: 'a img[src="/assets/logos/unosquare_logo.svg"]'
        },
        headerContactUsText : {
            selector: 'div h2[class="subtitle"]'
        },
        dateInIndustries : {
            selector: 'div:nth-child(4) div.container.content-home div.blockquote.row.p-3 div.col-9.col-lg-11.mt-4 span.text-uppercase.font-weight-bold:nth-child(2)'
        },
    }
};