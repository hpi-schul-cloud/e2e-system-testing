@release
Feature: To create, edit and delete column in the course board

As a teacher I want to ceate, edit and delete the column in the course board so that I can manage the colum in the board.

@stable_test
Scenario Outline:  Teacher is able to create, edit and delete a column in the course board

# Teacher adds a new column
Given I am logged in as a 'teacher1_dbc' at 'dbc'
When I go to rooms overview
When I go to room 'German'
When I go to the tab contents in course detail page
When I click on card Course Board
Then I see the page title in Course Board page
Then I see the existing card with welcom message in the existing column
When I click on the button Add column
When I enter the title name 'my test cycycycy column'
When I click on the page oustide the column
#Then I see my column named 'my test cycycycycyc column'
Then I click on the button add new card in the column

# Teacher edits the column
When I click on three dot menu in the column
When I select the Edit option in the drop down menu
When I enter the title name 'edit test cycycycycyc column'
When I click on the page oustide the column
#Then I see my column named 'edit test cycycycycyc column'

# Teacher deletes the column
When I click on three dot menu in the column
When I select the Delete option in the drop down
Then I see the confirmation Modal
When I click on the button Remove on the Modal
Then I do not see the column