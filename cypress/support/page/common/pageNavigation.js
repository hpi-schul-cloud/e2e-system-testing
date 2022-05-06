class Navigation {

    constructor() {
        this.courseOverviewnavigationButton = '[data-testid="Course-Overview"]'
    }

    goToRoomOverview() {
        cy.get(this.courseOverviewnavigationButton).click()
        cy.url().should('include', '/rooms-overview/')
    }
}
export default Navigation