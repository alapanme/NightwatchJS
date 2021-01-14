module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 7000
    },

    'Login': function (browser) {
        var home = browser.page.home()
        home
            .login()
            .assert.urlContains('/index.php/dashboard')
    },

    'Check Personal Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
            .updateMyInfo('Peter', 'Sullivan')
            .assert.value('@firstName', 'Peter')
            .assert.value('@lastName', 'Sullivan')
    },

    'Logout': function (browser) {
        var dashboard = browser.page.dashboard()
        dashboard
            .logout()
            .assert.urlContains('/index.php/auth/login')
    },
    
    after: function (browser) {
        browser.end();
    }
}