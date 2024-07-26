Feature: Self Service

    As as user, I can change my own user information

    Scenario: User updates their own user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the account settings page
        When I am changing my email to '<email>'
        And I '<user>' am changing my password to 'Password1!'
        Then I am saving the changes
        And Saving was successful

    Examples:
        | env | user         | email                      |
        | dbc | admin1_dbc   | temporary.admin@mail.tld   |
        | dbc | teacher1_dbc | temporary.teacher@mail.tld |
        | dbc | student1_dbc | temporary.student@mail.tld |
        | brb | admin1_brb   | temporary.admin@mail.tld   |
        | brb | teacher1_brb | temporary.teacher@mail.tld |
        | brb | student1_brb | temporary.student@mail.tld |
        | nbc | admin1_nbc   | temporary.admin@mail.tld   |
        | nbc | teacher1_nbc | temporary.teacher@mail.tld |
        | nbc | student1_nbc | temporary.student@mail.tld |


    Scenario: User reverts their own user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the account settings page
        When I '<user>' am reverting my email back
        And I '<user>' reverting my password back from 'Password1!'
        Then I am saving the changes
        And Saving was successful

    Examples:
        | env | user         |
        | dbc | admin1_dbc   |
        | dbc | teacher1_dbc |
        | dbc | student1_dbc |
        | brb | admin1_brb   |
        | brb | teacher1_brb |
        | brb | student1_brb |
        | nbc | admin1_nbc   |
        | nbc | teacher1_nbc |
        | nbc | student1_nbc |