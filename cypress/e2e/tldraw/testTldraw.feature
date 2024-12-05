@regression_test
@stable_test
@school_api_test
Feature: Test tldraw on board

    Scenario: I can create a whiteboard element and draw on it
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a course with name '<course_name>' exists with me as teacher
        Given a board exists in course '<course_name>' with name '<board_name>'
        Given the board has a column with a card
        When I click on plus icon to add content into card
        When I select whiteboard from the menu
        When I click on open Drawing Element

        Examples:
		    | namespace | teacher       | course_name              | board_name              |
		    | dbc       | teacher1_dbc  | CypressAut TLDraw Course | CypressAut TLDraw Board |