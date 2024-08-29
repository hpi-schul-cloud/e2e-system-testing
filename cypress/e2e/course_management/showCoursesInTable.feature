@stable_test
@regression_test
@school_api_test
Feature: Course - To show courses in a table with respective functionality

    As an administrator I want to see all courses belonging to my school.

    Scenario Outline: As an admin i can add a course to school
        Given I am logged in as a '<user>' at '<state>'
        When I click on administration in menu
        When I go to new course administration page
        Then I see the new course administration page
        When I click on add course
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select room colour as red
        Then I see teacher selection box
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I select the teacher '<teacher_name>' in the list
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the room
        Then I see student selection box to select the class for the room
        When I select the student '<student_name>' in the list
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        When I click on administration in menu
        When I go to new course administration page
        Then I see the course '<course_title>' on the new course administration page
        Examples:
            | user         | state | course_title                | teacher_name | student_name  |
            | admin1_nbc   | nbc   | Cypress-Admin-Test-Course   | Karl Herzog  | Herbert Kraft |

    Scenario Outline: As an admin i can see all courses of my school on the new course administration page.
        I see the new course administration page
        # Then I can see the administration page title -> needed data-testid "admin-course-title" currently not available
        Then I can see 2 tabs
        Then I can see 4 columns in the table
        Then I can see the course '<course_title>' without classes and with teacher '<teacher_name>'
        Then I can see 3 enabled action items for course '<course_title>'
        Examples:
            | course_title               | teacher_name  |
            | Cypress-Admin-Test-Course  | Karl Herzog   |
#
    Scenario Outline: As an admin i can edit the courses of my school
        Given I see the new course administration page
        When I click the edit button on the '<course_title>' course
        Then I see page Edit course
        Then I see the course title is '<course_title>'
        When I click the cancel edit course button
        Then I can see the cancel modal
        When I click the confirmation button on the cancel modal
        Then I see the new course administration page
        When I click the edit button on the '<course_title>' course
        Then I click on the save course changes button
        Then I see the new course administration page
    Examples:
        | course_title               |
        | Cypress-Admin-Test-Course  |
#
    Scenario Outline: As an admin i can synchronize a course with a group
        Given I see the new course administration page
        When I click the start synchronization button on the '<course_title>' course
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group '<group_title>' in the group selection
        Then I see the group '<group_title>' is selected
        When I click continue button on the modal to select a synced group
        Then I see the title of the modal for synchronization confirmation
        Then I see a warning about the consequences of synchronization
        Then I see information text of the modal asking for confirmation of synchronization
        When I click the confirm button on the synchronization confirmation modal
        Then I see the new course administration page
        #in future a stop synchronization button will be seen here and should be tested
        Then I do not see the start synchronize button for '<course_title>' anymore
    Examples:
        | course_title               | group_title         |
        | Cypress-Admin-Test-Course  | Cypress-Test-Group  |
#
    Scenario Outline: As an admin i can delete courses
        Given I see the new course administration page
        When I click the delete button for course '<course_title>' in course table
        Then I can see the delete modal
        When I click the confirmation button on the delete modal
        Then I see the new course administration page
    Examples:
        |course_title               |
        |Cypress-Admin-Test-Course  |
#
    #Scenario: As a teacher i can not see the new class page, when the feature flag is off
    #    Given I am logged in as a 'teacher1_dbc' at 'dbc'
    #    When I click on administration in menu
    #    Then I cannot see the new class administration page
    #    When I navigate to class administration page
    #    Then I cannot see the source header in the table
