'use strict'

class Invalid_Credentials {
  static #emailInputBox = '[data-testid="username-email"]'
  static #passwordField = '[data-testid = "password-email"]'
  static #notificationBannerField = '[data-testid="notification"]'
  static #loginFormSelector = 'form.login-form'
  static #inputFieldInvalidPseudoSelector = 'input:invalid'

  static #testData = {
    usernameText:
      'Fugiat consectetur deserunt officia velit. Dolore laboris incididunt consequat pariatur officia.',
    emailText: 'robot.test+.exe@@@@@@@gmx.de',
    invalidPassword:
      'sc9lwOX#Z!ImcKVp66SP9ag$RvEX00nhR&Vn@dIW@hhREU||Zhbhbhu&&&$)Uhbwhbdbb|||',
    errorMessageText: 'Login fehlgeschlagen.'
  }

  emailFieldIsVisibleAndEmpty () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#emailInputBox)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }

  enterInvalidEmailOrUsername (usernameOrEmail) {
    let usernameOrEmailText
    /*
        @params: Boolean
        if parameter is TRUE ---> it types Email
        else -----> it type Username
    */
    if (usernameOrEmail) {
      console.log(usernameOrEmail)
      usernameOrEmailText = Invalid_Credentials.#testData.emailText    // value is email, since logic is true
    } else {
      usernameOrEmailText = Invalid_Credentials.#testData.usernameText // value is username, since logic is false
    }
    cy.get(Invalid_Credentials.#emailInputBox)
      .type(usernameOrEmailText, { log: false, timeout: 120000 })
      .should('have.value', usernameOrEmailText)
  }

  enterInvalidPassword () {
    cy.get(Invalid_Credentials.#passwordField)
      .type(Invalid_Credentials.#testData.invalidPassword, { log: false })
      .should('have.length', 1)
  }

  clickOnSubmitButton () {
    cy.get(Invalid_Credentials.#loginFormSelector).should('be.visible').submit()
  }

  errorMessageDisplay () {
    cy.get(Invalid_Credentials.#notificationBannerField)
      .should('be.visible')
      .and('have.class', 'notification-content')
      .contains(Invalid_Credentials.#testData.errorMessageText)
  }

  passwordFieldIsVisibleAndEmpty () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#passwordField)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        1
      )
    })
  }

  formValidationMessageDisplay () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).then(el => {
        expect(el[0].checkValidity()).to.be.false
      })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }
}
export default Invalid_Credentials