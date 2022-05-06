class Common_Logins{

    emailInputFieldElement = '[data-testid="username"]'
    passwordInputFieldElement = '[data-testid="password"]'
    submitButton = '[data-testid="submit-login"]'
    nbcLoginWithEmail ='[data-testid="submit-cloud-site"]'

    brbTeacherLogin(){
    cy.visit(Cypress.env("BRB_loginPage"))
    cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("teacher_email"))
    cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("teacher_pwd"))
    cy.get(this.submitButton).eq(1).click()
    }

    brbStudentLogin(){

    }

    brbAdminLogin(){
    cy.visit(Cypress.env("BRB_loginPage"))
    cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("admin_email"))
    cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("teacher_pwd"))
    cy.get(this.submitButton).eq(1).click()
    }

    nbcAdminLogin(){
    cy.visit(Cypress.env("NBC_loginPage"))
    cy.get(this.nbcLoginWithEmail).eq(1).click()
    cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("admin_email"))
    cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("teacher_pwd"))
    cy.get(this.submitButton).eq(1).click()
    }

}
export default Common_Logins


































Cypress.Commands.add('teacherLogin',()=>{
    cy.visit('/')
    //cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
   
})

Cypress.Commands.add('studentLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('schueler@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})

Cypress.Commands.add('adminLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('admin@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})