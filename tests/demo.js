module.exports = {
    'step one: navigate to google' : function (browser) { //step one
      browser
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
    }
  }