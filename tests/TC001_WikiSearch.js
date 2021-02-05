module.exports = {
  '@tags': ['smoke', 'integration'],
    before : function(browser) {
      //Declaring Global Timeout
      browser.globals.waitForConditionTimeout = 7000;
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