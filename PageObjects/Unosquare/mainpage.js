var validateContactUs = {
    contactUnosquare: function() {
        this.api.pause(1000);
        const form = getData();
        return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', form.company)
            .setValue('@phoneTextField', form.phone)
            .setValue('@messageTextArea', form.message)
            .click('@submitBtn')
            .waitForElementVisible('@nameWarningMsg')
    }
};

function getData() {
    return require('../../dataExternal/unosquareForm');
};





var clickinMultiplePages = {
    clickinmultiplepages: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .click('@industriesMenu')
            .click('@aboutMenu')
            .click('@servicesMenu')
    }
};

var gotoblog = {
    goToBlog : function (page) {
        /*this.api.pause(1000);*/
        return this.waitForElementVisible(page)
            .click(page)
}

};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, clickinMultiplePages, gotoblog],
    elements: {
        giancarlo: {
          selector: 'div.gray-section:nth-child(5) div.container.content-home div.mt-5:nth-child(1) div.d-flex.justify-content-center div.leads div.lead-container:nth-child(2) div.d-flex.justify-content-center.flex-column.lead-card span.name'
        },
        mariodivece: {
          selector: 'div.gray-section:nth-child(5) div.container.content-home div.mt-5:nth-child(1) div.d-flex.justify-content-center div.leads div:nth-child(1) div.d-flex.justify-content-center.flex-column.lead-card span.name'
        },
        eduardo: {
          selector: 'div.gray-section:nth-child(5) div.container.content-home div.mt-5:nth-child(1) div.d-flex.justify-content-center div.leads div.lead-container:nth-child(3) div.d-flex.justify-content-center.flex-column.lead-card span.name'
        },
        ignacio : {
          selector: 'div.gray-section:nth-child(5) div.container.content-home div.mt-5:nth-child(1) div.d-flex.justify-content-center div.leads div:nth-child(4) div.d-flex.justify-content-center.flex-column.lead-card span.name'
        },
        diego : {
          selector: 'div.gray-section:nth-child(5) div.container.content-home div.mt-5:nth-child(1) div.d-flex.justify-content-center div.leads div.lead-container:nth-child(5) div.d-flex.justify-content-center.flex-column.lead-card span.name'
        },
        searchPostBtn: {
          selector: 'form button[class="search-submit link-blue"]'
        },
        searchBar: {
          selector: 'form input[id="search-bar"]'
        },
        headerBlog: {
            selector: 'div h1[style="font-weight:bold; width:100%"]'
        },
        recentPost: {
            selector: 'main label[for="tab1"]'
        },
        popularPost:{
          selector: 'main label[for="tab2"]'
        },
        nameWarningMsg: {
          selector: 'li label[class="hs-error-msg"]'
        },
        submitBtn: {
          selector: 'div input[class="hs-button primary large"]'
        },
        messageTextArea: {
          selector: 'div textarea[id="message-2a32df81-981f-4329-b943-9f2e76efe5f0"]'
        },
        phoneTextField: {
          selector: 'div input[id="phone-2a32df81-981f-4329-b943-9f2e76efe5f0"]'
        },
        companyTextField: {
          selector: 'div input[id="company-2a32df81-981f-4329-b943-9f2e76efe5f0"]'
        },
        contactusMenu: {
            selector: "li a[href = '/ContactUs']"
        },
        industriesMenu: {
            selector: "li a[href = '/Industries']"
        },
        aboutMenu: {
            selector: 'li a[href="https://www.unosquare.com/About"]'
        },
        servicesMenu: {
            selector: "li a[href = '/Services']"
        },
        blogMenu: {
            selector: "li a[href='https://blog.unosquare.com']"
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