'use strict'

class Courses {
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
  static #goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '[data-testid="modal_delete_course_button"]'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #courseDescription = '[id="courseDescription"]'
  static #courseName = '[name="name"]'
  static #createFAB = '[name="fab-icon"]'
  static #searchFieldRoomOverview = '[data-testid="search-field"]'

  fillCourseCreationForm (new_course) {
    cy.get(Courses.#courseTitle).type(new_course)
  }

  clickOnCreateFAB () {
    cy.get(Courses.#createFAB).click()
  }

  fillCourseCreationForm (newCourseName) {
    cy.get(Courses.#courseTitle).type(newCourseName)
  }

  clickOnNextSteps () {
    cy.get(Courses.#nextButton).click()
    cy.get(Courses.#nextContinueButton).click()
    /*cy.get(Courses.#goToCourseOverviewButton)
      .click()
      .wait('@dashboard_api')
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
        expect(interceptions.response.url).to.include('/dashboard')
        expect(interceptions.state).to.equal('Complete')
      })*/
    cy.get(Courses.#goToCourseOverviewButton)
      .click()
      .waitForNetworkIdle(1000)
  }

  performDeletion () {
    cy.get(Courses.#deleteButton).click()
    /*cy.get(Courses.#confirmDeletionPopup)
      .click({
        multiple: true,
        force: true
      })
      .wait([
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@dashboard_api'
      ])
      .then(interceptions => {
        expect(interceptions[4].response.statusCode).to.equal(200)
      })*/
    cy.get(Courses.#confirmDeletionPopup)
      .click({
        multiple: true,
        force: true
      })
      .waitForNetworkIdle(1000)
  }

  submitChanges () {
    /*cy.get(Courses.#btnSubmit)
      .click()
      .wait([
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@userPermissions_api'
      ])
      .then(interceptions => {
        expect(interceptions[4].response.statusCode).to.equal(200)
      })*/
    cy.get(Courses.#btnSubmit)
      .click()
      .waitForNetworkIdle(1000)
  }

  editCourseTitleAndDescription (editedRoomName) {
    cy.get(Courses.#courseName)
      .clear()
      .type(editedRoomName)
    cy.get(Courses.#courseDescription).type('this is test description')
  }

  searchForARoom (roomName) {
    cy.get(Courses.#searchFieldRoomOverview).type(roomName)
  }
}
export default Courses
