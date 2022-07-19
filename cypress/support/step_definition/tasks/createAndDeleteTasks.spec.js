import Tasks from '../../pages/tasks/pageTasks'

const tasks = new Tasks()

//Scenario: Teacher creates task as draft from room
//Given ('I am logged in as a 'teacher1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to rooms overview
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And I go to room 'Course with subject and tasks'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I click on FAB to create new content')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I click on New Task')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

Then('I can see create task page', () => {
  tasks.seeCreateTaskPage()
})

// And('file upload button is disabled', () => {
//   task.checkFileUploadButtonIsDisabled()
// })

When ('I enter title {string}', (taskTitle) => {
  tasks.enterTaskTitle(taskTitle)
})

And ('I click on Enable Group Submission', () => {
  tasks.clickOnGroupSubmissionCheckbox()
})

And ('I click on Draft', () => {
  tasks.clickOnDraftCheckbox()
})

And ('I set task-visibility-start-date to {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  tasks.setVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})

And ('I set task-visibility-due-date to {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
  tasks.setVisibilityDueDate(visibilityDueDate, visibilityDueTime)
})

And ('I enter task description {string}', (taskDescription) => {
  tasks.setTaskDescription(taskDescription)
})

//And('I click on button Submit')
//step defined -->\step_definition\tasks\commonTaskSteps.spec.js

//And('I can see room page 'Course with subject and tasks')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I can see task 'Task Creation and Deletion Test')
//step defined -->\step_definition\course\commonCourseSteps.spec.js


//Scenario: Teacher creates task as draft from room
//Given ('I am logged in as a 'teacher1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to rooms overview
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And I go to room 'Course with subject and tasks'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//When I click on three dot menu of content 'Task Creation and Deletion Test'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//I click on Delete in dot menu
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//I click on Cancel in confirmation window
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//I click on Delete in confirmation window
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//I can not see task 'Task Creation and Deletion Test'
//step defined -->\step_definition\course\commonCourseSteps.spec.js