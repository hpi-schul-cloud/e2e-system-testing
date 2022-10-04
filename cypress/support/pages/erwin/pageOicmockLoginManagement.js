

class Oidcmock_Login_Management {

    // Problem: all oauth-provider-buttons will have the same data-testid
    static #oidcmockLoginButton = '[data-testid="submit-oauth-login"]'

    visitLoginPage() {
        cy.visit(Cypress.env('DEFAULT'))
    }

    clickOnOidcLogin() {
        cy.get(Oidcmock_Login_Management.#oidcmockLoginButton).eq(1).click()
      }

}

export default Oidcmock_Login_Management
