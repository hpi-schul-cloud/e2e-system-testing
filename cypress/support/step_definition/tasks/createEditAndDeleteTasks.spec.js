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

And('file upload button is disabled', () => {
  tasks.fileUploadButtonIsDisabled()
})

When ('I enter title {string}', (taskTitle) => {
  tasks.enterTaskTitle(taskTitle)
})

And ('I click on Enable Group Submission', () => {
  tasks.clickOnGroupSubmissionCheckbox()
})

And ('I click on Draft Checkbox', () => {
  tasks.clickOnDraftCheckbox()
})

And ('I set task-visibility-start-date to {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  tasks.setVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})

And ('I set task-visibility-due-date to {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
  tasks.setVisibilityDueDate(visibilityDueDate, visibilityDueTime)
})

And ('I enter task description {string}', (taskDescription) => {
  tasks.setTaskText(taskDescription)
})

//And('I click on button Submit')
//step defined -->\step_definition\tasks\commonTaskSteps.spec.js

//And('I can see room page 'Course with subject and tasks')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I can see task 'Task Creation and Deletion Test')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//Scenario: Teacher edits and publishs task from room via form
//Given ('I am logged in as a 'teacher1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to rooms overview
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And I go to room 'Course with subject and tasks'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//When I click on three dot menu of content 'Task Creation and Deletion Test'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//I click on Edit in dot menu
//step defined -->\step_definition\course\commonCourseSteps.spec.js

And('file upload button is enabled', () => {
  tasks.fileUploadButtonIsEnabled()
})

When('I upload file {string}', (fileName) => {
  tasks.executeFileUploadDragAndDrop(fileName)
})

// When ('I enter title {string}', (taskTitle) => {
// -> this file

// And ('I click on Enable Group Submission', () => {
// -> this file

// And ('I set task-visibility-start-date to {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
// -> this file

// And ('I set task-visibility-due-date to {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
// -> this file

// And ('I enter task description {string}', (taskDescription) => {
// -> this file

And('I click on Public Submission Checkbox', () => {
  tasks.clickOnPublicSubmissionCheckbox()
})

And('I click on Submit Public Submission in confirmation window on task page', () => {
  tasks.clickSubmitInConfirmationWindow()
})

// And ('I click on Draft Checkbox', () => {
// -> this file

//And('I click on button Submit')
//step defined -->\step_definition\tasks\commonTaskSteps.spec.js

//And('I can see room page 'Course with subject and tasks')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I can see task 'Cy Task Creating, Editing, Deleting Test')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//When I click on task 'Cy Task Creating and Deleting Test'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

Then('description is {string}', (expectedDescription) => {
  tasks.descriptionEqualsOnDetailpage(expectedDescription)
})

When ('I click on button Edit', () => {
  tasks.clickOnEditInTaskDetails()
})

And ('Public Submission is enabled', () => {
  tasks.publicSubmissionIsEnabled()
})

And ('task-visibility-start-date is {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  tasks.compareVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})

And ('task-visibility-due-date is {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
  tasks.compareVisibilityDueDate(visibilityDueDate, visibilityDueTime)
})

And ('Draft is disabled', () => {
  tasks.draftIsDisabled()
})

Then('file {string} is visible in section files', (fileName) => {
  tasks.fileIsVisibleInSectionFiles(fileName)
})

Then('file {string} is not visible in section files', (fileName) => {
  tasks.fileIsNotVisibleInSectionFiles(fileName)
})

When('I click on file {string}', (fileName) => {
  tasks.clickOnFileInTaskEditPage(fileName)
})

Then('file {string} is displayed in file-viewer', (fileName) => {
  tasks.seeFileInFileViewer(fileName)
})

When('I click on file-viewer for file {string}', (fileName) => {
  tasks.clickOnFileViewer(fileName)
})



//Scenario: Teacher edits file
//Given ('I am logged in as a 'teacher1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//...

When('I click on rename file {string}', (fileName) => {
  tasks.clickOnRenameFile(fileName)
})

When('I enter filename {string} in modal dialog', (newFileName) => {
  tasks.enterNewFileName(newFileName)
})

And('I click on cancel in dialog window', () => {
  tasks.cancelRenameFileDialog()
})

And('I click on save in confirmation window', () => {
tasks.submitRenameFileDialog()
})

When('I click on download file {string}', (fileName) => {
  tasks.clickDownloadFile(fileName)
})

Then('file {string} is saved in folder downloads', (fileName) => {
  tasks.fileIsSavedInDownloads(fileName)
})

When('I click on delete file {string}', (fileName) => {
  tasks.clickOnDeleteFile(fileName)
})

And('I click on cancel in delete file dialog', () => {
  tasks.cancelDeleteFileDialog()
})

And('I click on submit in delete file dialog', () => {
  tasks.submitDeleteFileDialog()
})

//Scenario: Student deletes task
//Given ('I am logged in as a 'student1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

Then('I see detail page for task {string}', (taskTitle) => {
  tasks.seeDetailPageForTask(taskTitle)
})

When('I click on submission tab', () => {
  tasks.clickSubmissionTab()
})

And ('I enter text submission {string}', (submissionText) => {
  tasks.setTaskText(submissionText)
})

And('I click on button Save and Send', () => {
  tasks.clickSaveAndSendSubmissionBtn()
})

Then('I see hint that submission has been sent successfully', () => {
  tasks.seeSubmissionReceivedHint()
})

When('I click on button To-Room', () => {
  tasks.clickOnToRoomBtn()
})

And('I click completed task tab', () => {
  tasks.clickOnTabDoneTasks()
})

And('I click on not graded tasks', () => {
  tasks.openNotGradedTasks()
})

Then('I see task {string} in the list', (taskTitle) => {
  tasks.seeTaskInList(taskTitle)
})

Then('I do not see task {string} in the list', (taskTitle) => {
  tasks.seeTaskNotInList(taskTitle)
})


//Scenario: Teacher grades task from room
//Given ('I am logged in as a 'teacher1' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

And('I click on submissions tab', () => {
  tasks.clickSubmissionsTab()
})

Then('there is a tick in column delivered for {string}', (studentLastname) => {
  tasks.seeTickInStudentsSubmissionLine(studentLastname)
})

When('I click on submission of {string}', (studentLastname) => {
  tasks.openStudentsSubmission(studentLastname)
})

Then('I see submission text {string}', (submissionText) => {
  tasks.compareSubmissionText(submissionText)
})

When('I click on grading tab', () => {
  tasks.clickOnGradingTab()
})

And ('I enter comment {string}', (gradingText) => {
  tasks.setTaskText(gradingText)
})

And('I enter grade {string}', (gradingPercent) => {
  tasks.enterGradingPercent(gradingPercent)
})

And('I click on button Save and Send', () => {
  tasks.clickSaveAndSendBtn()
})

And('grading for {string} contains {string}', (studentLastname, gradingPercent) => {
  tasks.checkGradingForStudent(studentLastname, gradingPercent)
})

//Scenario: Teacher deletes task
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