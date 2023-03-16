// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './custom_commands/login'
import './custom_commands/logout'


// prevents blocking test by uncaught exception. This should be commented out when BC-2711 is resolved
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})