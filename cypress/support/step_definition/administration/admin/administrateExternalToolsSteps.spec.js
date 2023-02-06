import Management from '../../../pages/administration/pageAdministration'
import Teams from '../../../pages/teams/pageTeams'

const management = new Management()
const teams = new Teams()

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> step_definition\authentication\logoutStep.spec.js
// --> \step_definition\management\CommonManagementRelatedSteps.spec.js
// --> \step_definition\teams\commonTeamsRelatedSteps.spec.js


//Scenario: Deactivate Chat

When('I click on toggle switch to deactivate the chat', () => {
  management.clickChatToggleSwitch()
})

//Scenario: Activate Chat

When('I click on toggle switch to activate the chat', () => {
  management.clickChatToggleSwitch()
})

And ('I selected the messenger activation checkbox',()=>{
  teams.enableMessangerInTeamEdit()
})

And ('click on save changes',()=>{
  teams.clickOnSaveAfterEdit()
})

// Scenario: Delete External Tool
Then('I click on delete button for {string}', (tool) =>{
  management.deleteExternalTool(tool)
})