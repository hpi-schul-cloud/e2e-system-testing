const loginButton = '[class="btn btn-primary"]'
const usernameInputFieldElement = '[id="Username"]'
const passwordInputFieldElement = '[id="Password"]'


Cypress.Commands.add('loginOidcmock', (username, environment) => {
  cy.session([username, environment], () => {
    const env = Cypress.env()
    let link
    let environmentUpperCased = environment.toUpperCase()
    if (environmentUpperCased === 'OIDCMOCK') {
      link = Cypress.config(env[environmentUpperCased])
      cy.visit(link)
    }

    let userEmail
    let userPassword

    switch (username) {

      case 'emil.extern':
        userEmail = 'EXTERNAL_USER_1_USERNAME'
        userPassword = 'EXTERNAL_USER_1_PASSWORD'
        break;
    }
    cy.get(usernameInputFieldElement).eq(1).type(env[userEmail], {log:false})
    cy.get(passwordInputFieldElement).eq(1).type(env[userPassword], {log:false})
    cy.get(loginButton).eq(1).click()
    cy.url().should('contain', '/dashboard')
  })
  cy.visit('/dashboard')
})
