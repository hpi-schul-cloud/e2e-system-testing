import Create_Course from '../../../page/course/pageCreateCourse'

const createCourse = new Create_Course()

And('I click on FAB to create the course', () => {
  createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form', () => {
  createCourse.fillCourseCreationForm()
})

And('I click on next steps', () => {
  createCourse.clickOnNextSteps()
})

Then('I see the created course on the room overview page', () => {
  createCourse.createdCourseIsVisibleOnOverviewPage()
})
