import Oidcmock_Login_Management from '../../pages/erwin/pageOidcmockLoginManagement'

const oidcmockLoginManagement = new Oidcmock_Login_Management()

Given('I am on the dBildungscloud login page', () => {
    oidcmockLoginManagement.visitLoginPage()
})

When('I click on login via oidcmock button', () => {

})
