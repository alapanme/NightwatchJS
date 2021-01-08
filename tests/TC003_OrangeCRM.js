module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000;
    },

    beforeEach: function (browser) {
        //Opening Oragne CRM Demo Home Page
        browser
            .url('https://opensource-demo.orangehrmlive.com/')
    },

    'Successful Login': function (browser) {
        browser
            .waitForElementVisible('#txtUsername')
            .waitForElementVisible('#txtPassword')
            .saveScreenshot('./screenshots/homePage.png')
            .setValue('#txtUsername', 'Admin')
            .setValue('#txtPassword', 'admin123')
            .click('#btnLogin')
            .assert.containsText('#welcome', 'Welcome')
            .saveScreenshot('./screenshots/afterLogin.png')
    },

    'UnSuccessful Login': function (browser) {
        browser
            .waitForElementVisible('#txtUsername')
            .waitForElementVisible('#txtPassword')
            .setValue('#txtUsername', 'Admin')
            .setValue('#txtPassword', 'admin1234') //Wrong password to trigger failure
            .click('#btnLogin')
            .assert.containsText('#welcome', 'Welcome')
    },

    afterEach: function (browser) {
        browser.end();
    }
}