var validateContactUs = {
    contactUnosquare: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', 'QA CoE course')
            .setValue('@phoneTextField', '3300000000')
            .setValue('@messageTextArea', 'This is a Random Text used in a Course')
            .click('@submitBtn')
            .waitForElementVisible('@nameWarningMsg')
    }
};

var clickinMultiplePages = {
    clickinmultiplepages: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .click('@industriesMenu')
            .click('@aboutMenu')
            .click('@servicesMenu')
    }
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, clickinMultiplePages],
    elements: {
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