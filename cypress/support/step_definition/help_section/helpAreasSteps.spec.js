const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Help from "../../pages/help_section/pageHelpSection";

const help = new Help();

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

//Scenario: Use the help area in the sidebar

Then("I see the help articles page", () => {
	help.seeHelpArticlesPage();
});

Then("I see the help contact page", () => {
	help.seeHelpContactPage();
});

//Scenario: Use the article search inside the help articles area

When("I enter {string} in search bar for help articles", (search_term) => {
	help.enterKeywordInHelpArticlesSearchbar(search_term);
});

Then("I see an help article containing {string}", (result_term) => {
	help.seeHelpArticle(result_term);
});

//Scenario: Submit an issue via contact form inside help area

When("I fill out the contact form with option {string}, subject {string} and sender email {string}", (contact_option, contact_subject, contact_email) => {
	help.fillOutContactForm(contact_option, contact_subject, contact_email);
});

When("I click on button Submit to send form", () => {
	help.sendFormToSupport();
});

Then("I see message {string}", (message) => {
	help.seeConfirmationFormSended(message);
});

When("I see Advanced trainings with correct link {string} in sidebar", (linkUrl) => {
	help.checkLinkToAdvancedTrainings(linkUrl);
});
