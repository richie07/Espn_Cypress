const homePage = require('../../support/pageObjects/Espn_HomePage')

/// <reference types="Cypress" />

class BaseTest {
    
    constructor() {
       this.homePage = homePage
    }

    beforeHook() {
      // eslint-disable-next-line no-undef
      cy.log("Ejecutando el beforeHook...");
      this.homePage._visit()
    }
  
}
module.exports = new BaseTest()