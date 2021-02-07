module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'Validate URL and Text in New Window': function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/windows')
            .waitForElementVisible('a[href="/windows/new"]')
            .click('a[href="/windows/new"]')
            .pause(1000)
            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })
            .assert.urlContains('/windows/new')
            .assert.containsText('h3', 'New Window')
    },

    'Come back to the first window from second window and validate Text and URL': function (browser) {
        browser
            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })
            .assert.urlContains('windows')
            .assert.containsText('h3', 'Opening a new window')
    },

    after: function (browser) {
        browser.end()
    }
}