var dashboardCommands = {
    logout: function () {
        return this.waitForElementVisible('@dashboardTab')
            .click('@dashboardTab')
            .waitForElementVisible('@welcomeText')
            .click('@welcomeText')
            .waitForElementVisible('@logoutBtn')
            .click('@logoutBtn')
    }
}

module.exports = {
    commands: [dashboardCommands],
    elements: {
        dashboardTab: {
            selector: 'a[href*="dashboard"]'
        },
        welcomeText: {
            selector: '#welcome',
        },
        logoutBtn: {
            selector: 'a[href*="logout"]'
        }
    }
}