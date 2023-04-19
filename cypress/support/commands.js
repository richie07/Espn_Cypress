// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const waitUntil = require('cypress-wait-until');
Cypress.Commands.add('waitUntil', waitUntil);

/**
 * * Method to do wait element visible and action "by to do refactoring"
*/
Cypress.Commands.add('waitElementVisibleThenActionOptional', (selector, action = null) => {
  cy.waitUntil(() => cy.get(selector).should('be.visible'), {
    timeout: 20000, // tiempo máximo de espera en milisegundos
    interval: 500, // intervalo de tiempo de espera en milisegundos
    errorMsg: `${selector} no se ha vuelto visible en 20 segundos`, // mensaje de error personalizado en caso de que la espera exceda el tiempo máximo
  }).then(($el) => {
    if (typeof action === 'function') {
      action($el);
      cy.log('Aqui 1')
    } else if (typeof action === 'string') {
      cy.wrap($el).invoke(action);
      cy.log('Aqui 2')
    }
  });
});

/**
 * * Method to do wait element visible and click
*/
Cypress.Commands.add('waitElementVisibleAndClick', (selector) => {
  cy.waitUntil(() => cy.get(selector).should('be.visible'), {
    timeout: 20000, // tiempo máximo de espera en milisegundos
    interval: 500, // intervalo de tiempo de espera en milisegundos
    errorMsg: `${selector} no se ha vuelto visible en 20 segundos`, // mensaje de error personalizado en caso de que la espera exceda el tiempo máximo
  }).then(() => {
    cy.get(selector).click({ force: true })
  })
});

/**
 * * Copy json file "dataUserCopy" to "dataUser"
*/
Cypress.Commands.add("getIframe", (iframe) => {
  cy.get(iframe).then($iframe => {
    const body = $iframe.contents().find('body')
    cy.wrap(body).as('iframe')          
  })
})

/**
 * * Write file json from instance class User
 * @param user User
*/
Cypress.Commands.add("writeJsonFileFromBDUser", (user) => {
  cy.readFile("cypress/fixtures/dataUser.json").then((data) => {
    data.firstName = user.getFirstName();
    data.lastName = user.getLastName();
    data.password = user.getPassword();
    data.email = user.getEmail();    
    
    cy.writeFile('cypress/fixtures/dataUser.json', data)
  })
})



