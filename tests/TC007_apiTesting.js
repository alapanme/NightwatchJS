module.exports = {
    '@tags': ['smoke'],
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'API Testing - GET': function (browser) {
        var apiUrl = 'https://dog.ceo/api/breeds/list/all'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.message.australian, 'shepherd')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = { 'name': 'Testersdock' }
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'Testersdock')
        })
    },

    after: function (browser) {
        browser.end()
    }
}