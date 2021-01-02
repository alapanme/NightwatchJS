module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000;
    },

    beforeEach: function (browser) {
        //Opening Google homepage and Clicking on I agree button for cookie consent
        browser
            .url('https://www.google.com')
            .waitForElementVisible('iframe[src*="consent.google.com"]')
            .frame(0)
            .click('#introAgreeButton')
    },

    'Google Search for Hello World': function (browser) {
        browser
            .waitForElementVisible('input[name="q"]')
            .setValue('input[name="q"]', 'hello world')
            .keys(browser.Keys.ENTER)
            .assert.urlContains('q=hello+world')
    },

    'Google Search for Fruits': function (browser) {
        browser
            .waitForElementVisible('input[name="q"]')
            .setValue('input[name="q"]', 'Fruits')
            //.keys(browser.Keys.ENTER)
            .assert.urlContains('q=Fruits')
    },

    'Google Search for Food': function (browser) {
        browser
            .waitForElementVisible('input[name="q"]')
            .setValue('input[name="q"]', 'Food')
            .keys(browser.Keys.ENTER)
            .assert.urlContains('q=Food')
    },

    afterEach: function (browser) {
        browser.end();
    }
}