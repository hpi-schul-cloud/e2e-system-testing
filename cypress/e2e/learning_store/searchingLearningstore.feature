@release
Feature: Learning store - Activating and deactivating access for students

    As an admin I want to activate and deactivate students access to learning store

    @stable_test
    Scenario Outline: Search, open and download material form LerneStore
    # Admin activates students access to Learning store
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click on general settings panel
        When I click the checkbox to enable students access to learning store
        When I click on admin setting save button
    # User uses Learning store
        Given I am logged in as a '<user>' at '<namespace>'
        When I go to Learning Store overview
        When I write '<search_text>' in search container and wait for search result
        Then I see LerneStore website with search result
        When I click on first card of search result
        Then I see card details
        When I click on button To content

    # Admin deactivates students access to Learning store again (tests change from access to no-access)
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click on general settings panel
        When I click the checkbox to disable students access to learning store
        When I click on admin setting save button


        Examples:
            | user          | admin         | namespace  | search_text   |
            | teacher1_brb  | admin1_brb    | brb        | dino          |
            | student1_brb  | admin1_brb    | brb        | dino          |
            | admin1_brb    | admin1_brb    | brb        | dino          |