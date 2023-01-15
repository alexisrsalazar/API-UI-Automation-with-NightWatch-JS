module.exports = {
    before: function (browser) {

    },
    'Api APOD - Get testing': function(browser) {
        var apiUrl='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        browser.apiGet(apiUrl, function (response) {
            console.log(response.body)
            browser
                .assert.equal(response.statusCode, '200')
                .assert.equal(response.body.copyright, 'Barden Ridge Observatory')
                .assert.equal(response.body.media_type, 'image')
                .assert.equal(response.body.date, '2023-01-14')
        })

    },
    'Api Get - Apollo': function (browser) {
        var apiUrl='https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY'
        browser.apiGet(apiUrl, function(response) {
            console.log(response.body)
            browser
                .assert.equal(response.statusCode, '200')
                .assert.equal(response.body.date, '2014-02-04T03:30:01.210000')
                .assert.equal(response.body.resource['planet'], 'earth' )
                .assert.equal(response.body.service_version, 'v5000')

        })
    },

    'Api Post- Login': function(browser) {
        var apiUrl='https://reqres.in/api/login'
        var postData= {'email': 'eve.holt@reqres.in', 'password': 'cityslicka'}
        browser.apiPost(apiUrl, postData, null, null, function (response){
            console.log(response.body)
            browser
                .assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
        })
    }

}