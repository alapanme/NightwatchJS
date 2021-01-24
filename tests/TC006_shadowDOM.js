module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'Shadow DOM in Nightwatch JS': function (browser) {
        browser
            .url('https://shop.polymer-project.org/list/mens_outerwear')
            .waitForElementVisible('body')
            .execute(function () {
                return document.querySelector('shop-app').shadowRoot //1
                    .querySelector('iron-pages') //2
                    .querySelector('shop-list').shadowRoot //3
                    .querySelector('ul > li:nth-child(1)') //4
                    .querySelector('shop-list-item').shadowRoot //5
                    .querySelector('.title').innerText //6
            }, [], function (result) {
                this.assert.equal(result.value, 'Men\'s Tech Shell Full-Zip')
            })
    },

    after: function (browser) {
        browser.end()
    }
}