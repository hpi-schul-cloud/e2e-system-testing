class Help {
  static #questionIcon = '.fa-question'
  static #helpSectionInHeader = '[data-testid="Hilfeartikel"]'
  static #sendRequestOrProblemInHeader = '[data-testid="Hilfekontakt"]'
  static #advancedTrainingsInHeader = '[data-testid="Fortbildung"]'
  static #helpSectionInSidebar = '[data-testid="Hilfebereich"]'
  static #helpArticlesInSidebar = '[data-testid="Hilfeartikel"]'
  static #helpContactInSidebar = '[data-testid="Kontakt"]'
  static #advancedTrainingsInSidebar = '[data-testid="Fortbildungen"]'
  static #helpPageTitle = '[id="page-title"]'
  static #helpFirstSteps = '#erste_schritte > .icon-card__content > .h4'
  static #helpLessons = '[id="Unterricht"]'
  static #helpOrganization = '[id="Organisation"]'
  static #helpNutzungshilfen = '[id="nutzungshilfen"]'
  static #helpContactform = 'h2.h4'

  clickQuestionIcon () {
    cy.visit('/dashboard')
    cy.get(Help.#questionIcon).click()
  }

  clickHelpSectionInHeader () {
    cy.get(Help.#helpSectionInHeader).click()
  }

  clickSendRequestOrProblemInHeader () {
    cy.get(Help.#sendRequestOrProblemInHeader).click()
  }ﬂ

  clickAdvancedTrainingsInHeader () {
    cy.get(Help.#advancedTrainingsInHeader).click()
  }

  clickHelpSectionInSidebar () {
    cy.visit('/dashboard')
    cy.get(Help.#helpSectionInSidebar).click()
  }

  clickHelpArticlesInSidebar () {
    cy.get(Help.#helpArticlesInSidebar)
      .eq(0)
      .click()
  }

  clickHelpContactInSidebar () {
    cy.get(Help.#helpContactInSidebar).click()
  }

  clickAdvancedTrainingsInSidebar () {
    cy.get(Help.#advancedTrainingsInSidebar).click()
  }

  seeHelpArticlesPage () {
    cy.get(Help.#helpPageTitle)
    cy.contains('Hilfeartikel')
    cy.get(Help.#helpFirstSteps)
    cy.contains('Erste Schritte')
    cy.get(Help.#helpLessons)
    cy.contains('Unterricht')
    cy.get(Help.#helpOrganization)
    cy.contains('Organisation')
    cy.get(Help.#helpNutzungshilfen)
    cy.contains('Nutzungshilfen')
  }

  seeHelpContactPage () {
    cy.get(Help.#helpPageTitle)
    cy.contains('Kontakt')
    cy.get(Help.#helpContactform)
    cy.contains('Kontaktformular')
  }
}
export default Help
