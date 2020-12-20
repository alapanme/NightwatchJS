module.exports = {
    before : function(browser) {

      //Declaring GLobal Timeout
      browser.globals.waitForConditionTimeout = 5000;
    },

    'Wikipedia Search' : function (browser) {
    browser
      .url('https://www.wikipedia.org/')
      .assert.title('Wikipedia')
      .setValue('#searchInput', 'Google')
      .click('button[type="submit"]')
      .assert.containsText('h1#firstHeading', 'Google')
      .assert.title('Google - Wikipedia')
  },

  after : function(browser) {
    browser.end();
  }

}