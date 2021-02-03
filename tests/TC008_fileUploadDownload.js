module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'File Upload': function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/upload')
            .waitForElementVisible('input#file-upload')
            .setValue('input#file-upload', require('path').resolve(__dirname + '/../upload/mountains.jpg'))
            .click('input#file-submit')
            .assert.containsText('div#uploaded-files', 'mountains.jpg')
    },

    'File Download': function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/download')
            .waitForElementVisible('a[href="download/mountains.jpg"]')
            .click('a[href="download/mountains.jpg"]')
            .pause(1000)
            .checkFileExists(require('path').resolve(__dirname + '/../download/mountains.jpg'))
    },

    after: function (browser) {
        browser.end()
    }
}