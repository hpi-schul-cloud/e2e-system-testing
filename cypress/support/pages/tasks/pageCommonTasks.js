'use strict'

class Tasks_Common {

  static #tasksOverviewNavigationButton = '[data-testid="Aufgaben"]'

  navigateToTasksOverview() {
    cy.visit('/tasks')
    cy.get(Tasks_Common.#tasksOverviewNavigationButton).click()
    cy.url().should('include', '/tasks')
  }
}
export default Tasks_Common