'use strict'

class Common_Course {

  static #learningContentTab = '[data-testid="learnContent"]'
  static #toolsTab = '[data-testid="tools"]'
  static #groupsTab = '[data-testid="groups"]'
  static #toolsList = 'div.list-group'
  static #pageTitle = '[id="page-title"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'

  navigateToRoomsOverview() {
    cy.visit('/rooms-overview')
    cy.get(Common_Course.#courseOverviewNavigationButton).click()
    cy.url().should('include', '/rooms-overview')
  }

  naviagteToRoomBoard(room_name) {
    const selectedRoom = `[aria-label='${room_name}']`
    cy.get(selectedRoom).click({
      multiple: true,
      force: true
    })
  }

  showRoomPage(room) {
    const selectedRoom = `[aria-label='${room}']`
    cy.get(selectedRoom).should('be.visible')
  }

  navigateToTools() {
    cy.get(Common_Course.#toolsTab).click()
  }

  addNewTool() {
    cy.get('[aria-label="Neues Tool hinzufügen"]').click()
  }

  courseIsVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name)
  }

  courseIsNotVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name).should('not.exist')
  }

  canAddBigBlueButton() {
    cy.get(Common_Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton')
  }

  canNotAddBigBlueButton() {
    cy.get(Common_Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton').should('not.exist')
  }
}
export default Common_Course
