'use strict'

class Management_Common {
  static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]'
  static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]'
  static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]'
  static #courseAdministrationNavigationButton = '[data-testid="Kurse"]'
  static #classAdministrationNavigationButton = '[data-testid="Klassen"]'
  static #teamAdministrationNavigationButton = '[data-testid="Teams"]'
  static #schoolAdministrationNavigationButton = '[data-testid="Schule"]'
  static #navigateToStudentAdministrationLoad = "[data-testid='table-data-row']"

  navigateToAdministration () {
    cy.get(Management_Common.#administrationOverviewNavigationButton).click()
    cy.url().should('include', '/administration')
  }

  navigateToStudentAdministration () {
    cy.get(Management_Common.#studentAdministrationNavigationButton)
      .click()
      .get(Management_Common.#navigateToStudentAdministrationLoad)
      .then($elm => {
        expect($elm).to.have.lengthOf.greaterThan(10)
      })
    cy.url().should('include', '/administration/students')
  }

  navigateToTeacherAdministration () {
    cy.get(Management_Common.#teacherAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/teachers')
  }

  navigateToCourseAdministration () {
    cy.get(Management_Common.#courseAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/courses')
  }

  navigateToClassAdministration () {
    cy.get(Management_Common.#classAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/classes')
  }

  navigateToTeamAdministration () {
    cy.get(Management_Common.#teamAdministrationNavigationButton)
      .eq(1)
      .click()
    cy.url().should('include', '/administration/teams')
  }

  navigateToSchoolAdministration () {
    cy.get(Management_Common.#schoolAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/school')
  }
}
export default Management_Common
