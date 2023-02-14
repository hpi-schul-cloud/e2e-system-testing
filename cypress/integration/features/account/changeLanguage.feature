@account @stable_test
Feature: Account - Change language of the user from user setting

    As a user, I want to language change from user menu for all users i.e. (Admin, Teacher, Student)

    Scenario Outline: Teacher can change language to '<language>'
        Given I am logged in as a 'teacher' at 'brb'
        When I arrive on the dashboard
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        Then I can change language to '<language>'
        Then I can see language is changed to '<language>' in dashboard
        Examples:
            | language  |
            | english   |
            | spanish   |
            | ukrainian |
            | german    |

    Scenario Outline: Student can change language to '<language>'
        Given I am logged in as a 'student' at 'brb'
        When I arrive on the dashboard
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        Then I can change language to '<language>'
        Then I can see language is changed to '<language>' in dashboard
        Examples:
            | language  |
            | english   |
            | spanish   |
            | ukrainian |
            | german    |

    Scenario Outline: Admin can change language to '<language>'
        Given I am logged in as a 'admin' at 'brb'
        When I arrive on the dashboard
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        Then I can change language to '<language>'
        Then I can see language is changed to '<language>' in dashboard
        Examples:
            | language  |
            | english   |
            | spanish   |
            | ukrainian |
            | german    |