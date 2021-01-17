module.exports = {
  before: function (browser) {
    
    //Declaring Global Timeout
    browser.globals.waitForConditionTimeout = 7000
  },

  'Handling iFrames': function (browser) {
    browser
      .url('https://the-internet.herokuapp.com/iframe')
      .waitForElementVisible('body')
      .frame(0)
      .click('#tinymce')
      .clearValue('#tinymce')
      .setValue('#tinymce', 'Test Input')
      .assert.containsText('#tinymce', 'Test Input')
  },

  'Handling Nested iFrames': function (browser) {
    browser
      .url('https://the-internet.herokuapp.com/nested_frames')
      .frame(0)
      .frame(0)
      .assert.containsText('body', 'LEFT')

      .frameParent('[src="/frame_left"]')
      .frameParent('[src="/frame_top"]')
      .frame(0)
      .frame(1)
      .assert.containsText('#content', 'MIDDLE')

      .frameParent('[src="/frame_middle"]')
      .frameParent('[src="/frame_top"]')
      .frame(0)
      .frame(2)
      .assert.containsText('body', 'RIGHT')

      .frameParent('[src="/frame_right"]')
      .frameParent('[src="/frame_top"]')
      .waitForElementVisible('html > frameset')
      .frame(1)
      .assert.containsText('body', 'BOTTOM')
  },

  after: function (browser) {
    browser.end()
  }
}