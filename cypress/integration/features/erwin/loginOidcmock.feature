Feature: Login from OIDCMock into ErWIn.

    As an external user I want to login into the dBildungscloud via the OIDC mock so that I am logged in

    Scenario: Login as external user
        Given I am on the dBildungscloud login page
        When I click on login via OIDCMOCK button
        Then I am on the oidcmock login page
        When I fill out my credentials
        And I click on login button
        Then I am logged in as 'emil.extern' at 'default'
