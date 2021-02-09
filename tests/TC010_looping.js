module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'Loop through the table and print the names of the Company': function (browser) {
        browser
            .url('https://www.w3schools.com/html/html_tables.asp')
            .waitForElementVisible('#accept-choices')
            .click('#accept-choices')
            .waitForElementVisible('#customers')
            .elements('css selector', '#customers > tbody > tr > td', function (elements) {
                elements.value.forEach(function (elementsObj, index) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result) {
                        if (index % 3 == 0) {
                            console.log('\n' + result.value)
                        }
                    })
                })

            })
    },

    after: function (browser) {
        browser.end()
    }
}