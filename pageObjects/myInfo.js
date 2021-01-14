var myInfoCommands = {
    updateMyInfo: function (firstName, lastName) {
        return this.waitForElementVisible('@myInfoTab')
        .click('@myInfoTab')
        .click('@editSaveBtn')
        .clearValue('@firstName')
        .setValue('@firstName', firstName)
        .clearValue('@lastName')
        .setValue('@lastName', lastName)
        .click('@editSaveBtn')
    }
}

module.exports = {
    commands: [myInfoCommands],
    elements: {
        myInfoTab: {
            selector: '#menu_pim_viewMyDetails'
        },
        editSaveBtn: {
            selector: '#btnSave',
        },
        firstName: {
            selector: '#personal_txtEmpFirstName'
        },
        lastName: {
            selector: '#personal_txtEmpLastName'
        }
    }
}