module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'Keyword Events or Key Press': function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/key_presses')
            .waitForElementVisible('#target')
            .click('#target')
            .keys('J')
            .assert.containsText('#result', 'You entered: J')
            .keys(browser.Keys.BACK_SPACE)
            .assert.containsText('#result', 'You entered: BACK_SPACE')
    },

    'Hover over Element by moving the Mouse': function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/hovers')
            .waitForElementVisible('#content')
            .moveToElement('div:nth-child(3) > img', 50, 50)
            .assert.containsText('div:nth-child(3) > div > h5', 'name: user1')
            .moveToElement('div:nth-child(4) > img', 50, 50)
            .assert.containsText('div:nth-child(4) > div > h5', 'name: user2')
            .moveToElement('div:nth-child(5) > img', 50, 50)
            .assert.containsText('div:nth-child(5) > div > h5', 'name: user3')
    },

    after: function (browser) {
        browser.end()
    }
}